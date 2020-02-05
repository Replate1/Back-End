const router = require("express").Router();

const Businesses = require("./businesses-model.js");

// const Users = require("../auth/auth-model.js");

const validateUserId = require("../auth/validateUserId-mw.js");

const restricted = require("../auth/restricted-mw.js");

//BUSINESS PROFILE ENDPOINTS

// GET for one business, including profile info if possessed

// returns the username, phoneNumber, name and address of a business

router.get("/:id", validateUserId, (req, res) => {
  Businesses.findById(req.params.id)
    .then(business => {
      if (business) {
        res.status(200).json(business);
      } else {
        res.status(404).json({ message: "business not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// PUT for one business profile --NOT WORKING: ONLY UPDATING USER INFO, NOT PROFILE INFO

router.put("/:id", validateUserId, (req, res) => {
  const updateId = req.params.id;
  const changes = req.body;

  Businesses.updateBiz(updateId, changes)
    .then(() => {
      Businesses.findById(updateId).then(business =>
        res.status(200).json(business)
      );
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// DELETE for one business --tested and working

router.delete("/:id", validateUserId, (req, res) => {
  Businesses.remove(req.params.id)
    .then(() => {
      res
        .status(200)
        .json({ message: "The business was successfully deleted." });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// function validateUserId(req, res, next) {
//   // const token = req.headers.authorization;
//   Users.findById(req.params.id).then(user => {
//     if (user && user.id === req.user.id) {
//       console.log(user);
//       next();
//     } else {
//       res.status(401).json({ message: "you're not supposed to be here" });
//     }
//   });
// }

module.exports = router;
