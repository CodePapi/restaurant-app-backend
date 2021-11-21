const express = require("express");
const protect = require("../middleWares/protect")

const {
  BookRestaurant,
  GetMyBookings
} = require("../controllers/bookingControllers");

const router = express.Router();

router.post("/",protect, BookRestaurant);
router.get("/",protect, GetMyBookings);


module.exports = router;