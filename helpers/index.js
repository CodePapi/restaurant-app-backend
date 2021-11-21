const axios = require("axios");
const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");
const results = [];

const restaurantMap = (getAllRestaurants) => {
  return getAllRestaurants.map((restaurant, index) => {
    return {
      Name: restaurant.Name,
      location: restaurant.location,
      cuisine: restaurant.cousines,
      id: index + 1,
    };
  });
};
const callFromGoogle = async (locations, cousines) => {
  let extendCousines = Array(10).fill(cousines).flat();
  let restaurants = [];
  let allLocations = [];
  const key = "AIzaSyDycYHuYgJZxM3k2hBOGl_W8kg4_fshYNc";
  for (let x = 0; x < locations.length; x++) {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${locations[x]}&type=restaurant&key=${key}`
    );

    let a = data.results.map((restaurant) => {
      return {
        Name: restaurant.name,
        location: locations[x],
      };
    });
    for (let i = 0; i < a.length; i++) {
      a[i].cousines = extendCousines[i];
      restaurants.push(a[i]);
    }
    allLocations.push(restaurants);
  }
  let locationData = allLocations[0].concat(allLocations[0]);

  return locationData;
};

const callFromSpreadSheet = (
  res,
  dataFromGoogle,
  location = null,
  cuisine = null
) => {
  if (results.length < 1) {
    let exactPath = path.dirname(__filename);
    fs.createReadStream(exactPath + "/" + "restaurants-data.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        let getAllRestaurants = results.concat(dataFromGoogle);
        let resdATA = restaurantMap(getAllRestaurants);
        return res.status(200).json({ total: resdATA.length, data: resdATA });
      });
  } else {
    let getAllRestaurants = results.concat(dataFromGoogle);
    let resdATA = restaurantMap(getAllRestaurants);

    if (cuisine !== null || location !== null) {
      console.log(cuisine, location);
      if (cuisine !== null && location === null) {
        let filtered = resdATA.filter(
          (restaurant) => restaurant.cuisine === cuisine
        );
        res.status(200).json({ total: filtered.length, data: filtered });
      } else if (location !== null && cuisine === null) {
        let filtered = resdATA.filter(
          (restaurant) => restaurant.location === location
        );
        res.status(200).json({ total: filtered.length, data: filtered });
      } else if (cuisine !== null && location !== null) {
        let filtered = resdATA.filter(
          (restaurant) =>
            restaurant.cuisine === cuisine && restaurant.location === location
        );
        res.status(200).json({ total: filtered.length, data: filtered });
      }
    } else {
      res.status(200).json({ total: resdATA.length, data: resdATA });
    }
  }
};

module.exports = { callFromGoogle, callFromSpreadSheet };
