const { verifySignUp } = require("../middleWares/index");
const authJWT= require("../middleWares/authJWT")
const express = require("express");
const controller = require("../contraollers/usersControllers");
const router = express.Router();



  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    controller.signup
  );

  router.post("/signin", controller.signin);
  router.get("/profile", authJWT.protect, controller.userProfile);

  module.exports = router;

