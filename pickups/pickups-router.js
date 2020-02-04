const router = require("express").Router();

const Pickups = require("./pickups-model.js");

// const restricted = require("../auth/restricted-mw.js");

// const userRole = require("../auth/role-mw.js");

// FOR BUSINESSES

//POST for a business to create a new pickup / --tested and working

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

//PUT for a business to edit its pickup by id /:id --tested and working

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let changes = req.body;

  Pickups.update(id, changes)
    .then(() => {
      res.status(200).json({ message: "request was updated" });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

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

//DELETE for a business to cancel its pickup /:id --tested, working, but returns an empty object

router.delete("/:id", (req, res) => {
  let id = req.params.id;

  Pickups.remove(id)
    .then(() => {
      res
        .status(200)
        .json({ message: "The pickup request was successfully deleted." });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// FOR VOLUNTEERS

//GET for a volunteer to see all unassigned pickups /open-requests --tested and working

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

//PUT for a volunteer to accept/cancel a pickup /:id --same route logic as a business to edit a request, but needs middleware

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let changes = req.body;

  Pickups.update(id, changes)
    .then(() => {
      res.status(200).json({ message: "request was updated" });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
