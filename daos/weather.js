const mongoose = require("mongoose");
const Weather = require("../models/weather");

module.exports = {};

module.exports.getWeatherByLocationName = async (name) => {
  const foundLocation = await Weather.findOne({ name: name }).lean();
  if (foundLocation) {
    return foundLocation;
  } else {
    return false;
  }
};
