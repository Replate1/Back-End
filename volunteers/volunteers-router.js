const router = require("express").Router();

const Volunteers = require("./volunteers-model.js");

const validateUserId = require("../auth/validateUserId-mw.js");

// const restricted = require("../auth/restricted-mw.js");

//VOLUNTEER PROFILE ENDPOINTS

// GET for one volunteer profile -- returns with username, name and phonenumber

router.get("/:id", validateUserId, (req, res) => {
  Volunteers.findById(req.params.id)
    .then(volunteer => {
      if (volunteer) {
        res.status(200).json(volunteer);
      } else {
        res.status(404).json({ message: "volunteer not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// PUT for one volunteer profile --NOT WORKING: ONLY UPDATING USER INFO, NOT PROFILE INFO
//findById, update

router.put("/:id", validateUserId, (req, res) => {
  const updateId = req.params.id;
  const changes = req.body;

  Volunteers.updateVol(updateId, changes)
    .then(() => {
      Volunteers.findById(updateId).then(volunteer =>
        res.status(200).json(volunteer)
      );
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// DELETE for one volunteer profile
//findById, remove

router.delete("/:id", validateUserId, (req, res) => {
  Volunteers.remove(req.params.id)
    .then(res => {
      res
        .status(200)
        .json({ message: "The volunteer was successfully deleted." });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
