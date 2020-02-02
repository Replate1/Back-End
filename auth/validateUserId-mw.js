const Users = require("./auth-model.js");

module.exports = {
  validateUserId
};

function validateUserId(req, res, next) {
  Users.findById(req.params.id).then(user => {
    if (!user) {
      res.status(404).json({ message: "invalid user id" });
    } else {
      req.user = user;
    }
  });
  next();
}
