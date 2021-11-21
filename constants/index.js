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

  const postgressConstants={secret:"sugar",
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "07087126706",
  DB: "restaurant",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
  module.exports={locations, cousines, postgressConstants}