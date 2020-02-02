const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets.js");

const Users = require("./auth-model.js");
// const Businesses = require("../businesses/businesses-model.js");
// const Volunteers = require("../volunteers/volunteers-model.js");

//POST for registering new users --working

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(() => {
      res.status(201).json({ message: "user has been added to the database" });
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

// POST for logging in --working and returning token

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = youveGotToken(user);

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "you ain't got the creds" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function youveGotToken(user) {
  const payload = {
    subject: user.id
  };

  const options = {
    expiresIn: "8h"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
