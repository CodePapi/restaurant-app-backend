const express = require("express");
const {
  BookRestaurant,
  GetMyBookings
} = require("../contraollers/bookingControllers");
const router = express.Router();

router.post("/", BookRestaurant);
router.get("/", GetMyBookings);


module.exports = router;