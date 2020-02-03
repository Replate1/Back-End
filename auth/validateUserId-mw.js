const Users = require("./auth-model.js");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets.js");

module.exports = {
  validateUserId
};

function validateUserId(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "your token is invalid" });
      } else {
        req.user = decodedToken.user;
        Users.findById(req.user.id).then(user => {
          if (user) {
            next();
          } else {
            res.status(500).json({ message: "invalid user id" });
          }
        });
      }
    });
  } else {
    res.status(401).json({ message: "you're not supposed to be here" });
  }
}
