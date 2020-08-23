const { Router } = require("express");
const router = Router();

router.use("/weather", require("./weather"));

router.get("/", (req, res, next) => {
  res.render("index");
});

router.use((error, req, res, next) => {
  return res.status(500).render("errorServerSide", { name: name });
});

module.exports = router;
