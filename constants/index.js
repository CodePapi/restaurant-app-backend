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
  // This is the only time you will be able to view this password. Copy and save the password for your reference, otherwise you will need to modify the database to change it.
  // Master username
  // postgres
  // Master password
  // 07087126706

  const postgressConstants={
  secret:"sugar",
  HOST: "database-2.c0awgonjlzh2.us-east-2.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "07087126706",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
  module.exports={locations, cousines, postgressConstants}