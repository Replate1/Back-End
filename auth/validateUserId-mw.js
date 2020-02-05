const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  const id = parseInt(req.params.id);

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "your token is invalid" });
      } else {
        req.user = decodedToken.subject;
        console.log(decodedToken.subject, id);
        if (decodedToken.subject === id) {
          next();
        } else {
          res.status(401).json({ message: "you shall not pass" });
        }
      }
    });
  } else {
    res.status(401).json({ message: "you're not supposed to be here" });
  }

  // const id = req.params.id;

  // Users.findById(id).then(user => {
  //   if (user.id === req.params.id) {
  //     console.log(req.user);
  //     next();
  //   } else {
  //     res.status(401).json({ message: "you're not supposed to be here" });
  //   }
  // });
};

// function validateUserId(req, res, next) {
//   // const token = req.headers.authorization;

// }
// if (token) {
//   jwt.verify(token, jwtSecret, (err, decodedToken) => {
//     if (err) {
//       res.status(401).json({ message: "your token is invalid" });
//     } else {
//       req.user = decodedToken.user;
//       if (req.user.id === req.params.id) {
//         next();
//       } else {
//         res.status(401).json({ message: "you shall not pass" });
//       }
//     }
//   });
// } else {
//   res.status(401).json({ message: "you're not supposed to be here" });
// }

// function validateUserId(req, res, next) {
//   Users.getById(req.params.id).then(user => {
//     if (!user) {
//       res.status(404).json({ message: "invalid user id" });
//     } else {
//       req.user = user;
//     }
//   });
//   next();
// }
