const mongoose = require("mongoose");
const Cotizacion = mongoose.model("Cotizacion");

function crearCotizacion(req, res, next) {
  var cotizacion = new Cotizacion(req.body);

  cotizacion
    .save()
    .then((cotizacion) => {
      res.status(201).send(cotizacion);
    })
    .catch(next);
}

function obtenerCotizaciones(req, res, next) {
  // hay dos endpoints para buscar la misma funcion
  Cotizacion.find()
    .then((cotizacion) => {
      res.send(cotizacion);
    })
    .catch(next);
}

function modificarCotizacion(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  Cotizacion.findById(req.cotizacion.id)
    .then(() => {
      if (!cotizacion) {
        return res.sendStatus(401);
      }
      let nuevaInfo = req.body;
      if (typeof nuevaInfo.nombre !== "undefined")
        cotizacion.nombre = nuevaInfo.nombre;
      if (typeof nuevaInfo.estado !== "undefined")
        cotizacion.estado = nuevaInfo.estado;
      if (typeof nuevaInfo.telefono !== "undefined")
        user.telefono = nuevaInfo.telefono;
      i;
    })
    .catch(next);
}

function eliminarCotizacion(req, res) {
  // únicamente borra a su propio usuario obteniendo el id del token
  Cotizacion.findOneAndDelete({ _id: req.cotizacion.id }).then((r) => {
    //Buscando y eliminando usuario en MongoDB.
    res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
  });
}

module.exports = {
  crearCotizacion,
  obtenerCotizaciones,
  modificarCotizacion,
  eliminarCotizacion,
};
