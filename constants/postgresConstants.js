module.exports = {
    secret:"sugar",
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