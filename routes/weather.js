const { Router } = require("express");
const router = Router();
const weatherDAO = require("../daos/weather");

router.get("/", async (req, res, next) => {
  res.render("weather");
});

router.get("/location", async (req, res, next) => {
  const { name } = req.query;

  try {
    const weatherLocation = await weatherDAO.getWeatherByLocationName(name);

    if (!name) {
      return res.status(302).redirect("/weather");
    } else if (!weatherLocation) {
      return res.status(404).render("errorNotFound", { name: name });
    } else {
      res.render("weatherResponse", {
        name: weatherLocation.name,
        temperature: weatherLocation.temperature,
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
