const Sequelize = require("sequelize");
const contant=require("../constants/postgresConstants")
const sequelize = new Sequelize(contant.DB, contant.USER, contant.PASSWORD, {
  host: contant.HOST,
  dialect: contant.dialect,
  operatorsAliases: false,

  pool: {
    max: contant.pool.max,
    min: contant.pool.min,
    acquire: contant.pool.acquire,
    idle: contant.pool.idle,
  },
});

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
