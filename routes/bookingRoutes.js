const express = require("express");
const {
  BookRestaurant,
  GetMyBookings
} = require("../contraollers/bookingControllers");
const authJwt  = require("../middleWares/authJWT");
const router = express.Router();

router.post("/",authJwt.protect, BookRestaurant);
router.get("/",authJwt.protect, GetMyBookings);


module.exports = router;