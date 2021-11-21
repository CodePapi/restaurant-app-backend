const Sequelize = require("sequelize");
const { postgressConstants } = require("../constants/");

//postgress db setup
const sequelize = new Sequelize(
  postgressConstants.DB,
  postgressConstants.USER,
  postgressConstants.PASSWORD,
  {
    host: postgressConstants.HOST,
    dialect: postgressConstants.dialect,
    operatorsAliases: false,

    pool: {
      max: postgressConstants.pool.max,
      min: postgressConstants.pool.min,
      acquire: postgressConstants.pool.acquire,
      idle: postgressConstants.pool.idle,
    },
  }
);

//Test running
try {
  sequelize.authenticate();
  console.log(
    "Connection has been established successfully on Postgress Database."
  );
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/userModels")(sequelize, Sequelize);

module.exports = db;
