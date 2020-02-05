const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "your token is invalid" });
      } else {
        // req.user.type = decodedToken.role;
        // console.log(decodedToken.role);
        if (decodedToken.role === 1) {
          next();
        } else {
          res.status(401).json({ message: "you shall not pass" });
        }
      }
    });
  } else {
    res.status(401).json({ message: "you're not supposed to be here" });
  }
};
