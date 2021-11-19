const express=require("express")
const {getAllRestaurants, getAllRestaurantsByGoogle} =require("../contraollers/restaurantscontrollers")
const router = express.Router()



router.get("/", getAllRestaurants)
router.get("/google", getAllRestaurantsByGoogle)

module.exports = router