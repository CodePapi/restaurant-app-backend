const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../config/postgress");
const { postgressConstants } = require("../constants");
const User = db.user;
//helpers
const { signupMail } = require("../helpers/emails/index");
const { confirmationText } = require("../helpers/nodeMailer/index");

//signup request
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      confirmationText(
        req.body.email,
        "New Registration",
        signupMail(req.body.username)
      );
      user && res.send({ message: "User registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//sign in request
exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      const token = jwt.sign({ id: user.id }, postgressConstants.secret, {
        expiresIn: 86400, // 24 hours
      });
      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//get user profile request
exports.userProfile = (req, res) => {
  User.findOne({
    where: {
      id: req.userId,
    },
  })
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
