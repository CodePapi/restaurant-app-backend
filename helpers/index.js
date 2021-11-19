const axios = require("axios");

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

  return locationData.map((a, index) => {
    return { restaurant: a, id: index + 1 };
  });
};

module.exports = { callFromGoogle };
