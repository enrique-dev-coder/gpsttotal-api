const router = require("express").Router(); // indicamos que de express queremos el router

const {
  crearCotizacion,
  obtenerCotizaciones,
  modificarCotizacion,
  eliminarCotizacion,
} = require("../controllers/cotizaciones");

router.get("/", obtenerCotizaciones);
//router.get("/:id", obtenerCotizaciones); // nuevo endpoint con todos los detalles de mascota
router.post("/", crearCotizacion);
router.put("/:id", modificarCotizacion);
// aqui es cuando necesitas el JWT  es para que no den de
router.delete("/:id", eliminarCotizacion);

/*
router.get("/", obtenerMascotas);
router.post("/", crearMascota);
router.put("/:id", modificarMascota);
router.delete("/:id", eliminarMascota);
*/
module.exports = router;
