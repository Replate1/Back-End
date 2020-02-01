module.exports = {
  userRole
};

function userRole(role) {
  return function(req, res, next) {
    if (req.user && req.user.type === role) {
      next();
    } else {
      res.status(403).json({ message: "you aren't supposed to be here" });
    }
  };
}
