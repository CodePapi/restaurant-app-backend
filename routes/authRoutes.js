const checkDuplicateUsernameOrEmail  = require("../middleWares/verifySignup");
const protect = require("../middleWares/protect")
const express = require("express");
const controller = require("../controllers/usersControllers");
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
    
      checkDuplicateUsernameOrEmail
    ,
    controller.signup
  );

  router.post("/signin", controller.signin);
  router.get("/profile", protect, controller.userProfile);

  module.exports = router;

