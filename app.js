const express = require("express");
const cors = require('cors')
const restaurant = require("./routes/restaurantsRoutes")
const booking = require("./routes/bookingRoutes.js")
const dotenv =require('dotenv')
const {connectDB} = require('./config/db.js')

dotenv.config()

connectDB()
const app = express()
app.use(express.json())
app.use(cors());

app.use("/api/restaurants", restaurant)
app.use("/api/booking", booking)

app.get("/",(req,res)=>{
    res.send("testing")
})

module.exports=app