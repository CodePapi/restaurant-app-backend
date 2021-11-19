const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");
const results = [];

//constants
const { locations, cousines } = require("../constants/index");

//HELPERS
const { callFromGoogle } = require("../helpers/index");

const getAllRestaurants = async (req, res) => {
  let exactPath = path.dirname(__filename);
  fs.createReadStream(exactPath + "/" + "sample.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.status(200).json(results);
      // [
      //   { NAME: 'Daffy Duck', AGE: '24' },
      //   { NAME: 'Bugs Bunny', AGE: '22' }
      // ]
    });
  // console.log(req)
};

const getAllRestaurantsByGoogle = async (req, res, next) => {
  try {
   let restaurants= await callFromGoogle(locations, cousines)
    .then((a) => a);

    res.status(200).json(restaurants)
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllRestaurants, getAllRestaurantsByGoogle };
