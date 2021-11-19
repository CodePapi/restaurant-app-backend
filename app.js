const express = require("express");
const restaurant = require("./routes/restaurantsRoutes")
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/restaurants", restaurant)

app.get("/",(req,res)=>{
    res.send("testing")
})

module.exports=app