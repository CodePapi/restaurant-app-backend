
//constants
const { locations, cousines } = require("../constants/index");

//HELPERS
const { callFromGoogle, callFromSpreadSheet } = require("../helpers/index");

const getAllRestaurants = async (req, res) => {
  const { cuisine, location } = req.query;

  try {
    let restaurants = await callFromGoogle(locations, cousines).then((a) => a);
    callFromSpreadSheet(res, restaurants, location, cuisine);
  } catch (error) {
    throw Error(error);
  }
};

const getAllCuisines = async (req, res) => {
  try {
    await res.status(200).json(cousines);
  } catch (error) {
    await res.status(400).json(error);
  }
};

const getAllLocations = async (req, res) => {
  try {
    await res.status(200).json(locations);
  } catch (error) {
    await res.status(400).json(error);
  }
};

module.exports = { getAllRestaurants, getAllCuisines, getAllLocations };
