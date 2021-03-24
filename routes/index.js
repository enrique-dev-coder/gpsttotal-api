var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("welcome to gpstotal api");
});

router.use("/cotizaciones", require("./cotizaciones"));

module.exports = router;
