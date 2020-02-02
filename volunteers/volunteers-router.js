const router = require("express").Router();

const Volunteers = require("./volunteers-model.js");

//VOLUNTEER PROFILE ENDPOINTS

// GET for one volunteer profile -- returns with username, name and phonenumber

router.get("/:id", (req, res) => {
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

router.put("/:id", (req, res) => {
  const updateId = req.params.id;
  const updateVolunteer = {
    name: req.body.name,
    phone: req.body.phoneNumber
  };

  Volunteers.updateVol(updateId, updateVolunteer)
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

router.delete("/:id", (req, res) => {
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
