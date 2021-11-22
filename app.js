const express = require("express");
const cors = require("cors");
const restaurant = require("./routes/restaurantsRoutes");
const booking = require("./routes/bookingRoutes.js");
const auth = require("./routes/authRoutes");
const dotenv = require("dotenv");
const { connectMongoDB } = require("./config/mongoose");
const postgresSQLDB = require("./config/postgress");

dotenv.config();
connectMongoDB();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/restaurants", restaurant);
app.use("/api/booking", booking);
app.use("/api/auth", auth);

postgresSQLDB.sequelize.sync({ force: false })


app.get("/", (req, res) => {
  res.send("app running ");
});

module.exports = app;
