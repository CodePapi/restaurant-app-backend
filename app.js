const express = require("express");
const restaurant = require("./routes/restaurantsRoutes")
const cors = require('cors')
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express()
app.use(cors())
// app.use(express.json())
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use("/api/restaurants", restaurant)

app.get("/",(req,res)=>{
    res.send("testing")
})

module.exports=app