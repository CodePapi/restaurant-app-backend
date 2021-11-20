const express = require("express");
const {
  getAllRestaurants,
  getAllCuisines,
  getAllLocations,
} = require("../contraollers/restaurantscontrollers");
const router = express.Router();

router.get("/", getAllRestaurants);
router.get("/locations", getAllLocations);
router.get("/cuisines", getAllCuisines);


module.exports = router;
