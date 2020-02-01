const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets.js");

const Users = require("./auth-model.js");
// const Businesses = require("../businesses/businesses-model.js");
// const Volunteers = require("../volunteers/volunteers-model.js");

//POST for registering new users

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  //   if (user.type === "business") {
  Users.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(500)
    .json({ message: "something went wrong" });
  //   } else if (user.type === "volunteer") {
  //     Volunteers.add(user)
  //       .then(newVolunteer => {
  //         res.status(201).json(newVolunteer);
  //       })
  //       .catch(500)
  //       .json({ message: "something went wrong" });
  //   } else {
  //     res.status(400).json({ message: "oops, try again" });
  //   }
});

// POST for logging in

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
    subject: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: "8h"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
