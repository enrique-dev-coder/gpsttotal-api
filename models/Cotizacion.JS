const mongoose = require("mongoose");

const CotizacionSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true }, // nombre de la persona (o titulo del anuncio)
    fecha: { type: String, required: true },
    email: {
      type: String,
      unique: true, //este campo no se puede repetir
      lowercase: true,
      required: [true, "no puede estar vacío"],
      match: [/\S+@\S+\.\S+/, "es inválido"],
      index: true,
    },
    telefono: { type: Number, required: true },
    vegetacion: {
      type: String,
      enum: ["selva", "Desierto", "Pantano", "Bosque", "Montaña", "Llanura"],
    }, // perro | gato | otro
    estado: { type: String, required: true }, // muy importante
    localidad: { type: String, required: true },
  },
  { timestamps: true }
);

CotizacionSchema.methods.publicData = function () {
  return {
    id: this.id,
    nombre: this.nombre,
    fecha: this.fecha,
    email: this.email,
    telefono: this.telefono,
    vegetacion: this.vegetacion,
    estado: this.estado,
    localidad: this.localidad,
  };
};
// exporta hacia afuera como "Cotizacion"
mongoose.model("Cotizacion", CotizacionSchema);
