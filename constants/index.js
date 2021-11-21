const dotenv = require("dotenv");
dotenv.config();
const locations = [
    "lagos",
    "abuja",
    "port harcourt",
    "london",
    "manchester city",
    "dubai",
    "new york",
    "washington  dc",
    "califonia",
    "ontario",
  ];
  
const  cousines = [
    "rice",
    "beans",
    "egusi",
    "chicken",
    "salad",
    "noodles",
    "fried yam",
    "scorge egg",
    "chinese fries",
    "fried fish",
  ];

  const postgressConstants={
  secret:process.env.JWT_SECRET,
  HOST: process.env.POSTGRES_HOST,
  USER: process.env.POSTGRES_USER,
  PASSWORD: process.env.POSTGRES_PASSWORD,
  DB: process.env.POSTGRES_DB,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
  module.exports={locations, cousines, postgressConstants}