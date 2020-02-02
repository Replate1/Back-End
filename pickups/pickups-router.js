const router = require("express").Router();

const Pickups = require("./pickups-model.js");

// FOR BUSINESSES

//POST for a business to create a new pickup /

router.post("/", (req, res) => {
  const pickup = req.body;

  Pickups.add(pickup)
    .then(() => {
      res.status(201).json({ message: "The new request has been created" });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//PUT for a business to edit its pickup by id /:id
//need update, findById

//GET for a business to see all of its pickups /business/:id --tested and working

router.get("/business/:id", (req, res) => {
  const bizId = req.params.id;

  Pickups.findByBizId(bizId)
    .then(bizPickups => {
      res.status(200).json(bizPickups);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//DELETE for a business to cancel its pickup /:id
//remove, findById

// FOR VOLUNTEERS

//GET for a volunteer to see all unassigned pickups /open-requests --tested and working
//need find (where there is no volunteerId)

router.get("/open-requests", (req, res) => {
  Pickups.findUnassigned()
    .then(openRequests => {
      res.status(200).json(openRequests);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//GET for a volunteer to see one pickup by id /:id --tested and working
router.get("/:id", (req, res) => {
  Pickups.findById(req.params.id)
    .then(pickup => {
      res.status(200).json(pickup);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//GET for a volunteer to see all of its accepted pickups /volunteer/:id --tested and working
//need findById (req.params.id)

router.get("/volunteer/:id", (req, res) => {
  const volId = req.params.id;

  Pickups.findByVolId(volId)
    .then(volPickups => {
      res.status(200).json(volPickups);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//PUT for a volunteer to accept a pickup /:id
//need findById, update

//PUT for a volunteer to cancel a pickup /:id
//need findById, update

module.exports = router;
