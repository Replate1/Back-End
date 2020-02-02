const router = require("express").Router();

const Businesses = require("./businesses-model.js");

//BUSINESS PROFILE ENDPOINTS

// GET for one business, including profile info if possessed

// returns the username, phoneNumber, name and address of a business

router.get("/:id", (req, res) => {
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

router.put("/:id", (req, res) => {
  const updateId = req.params.id;
  const updateBusiness = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phoneNumber
  };

  Businesses.updateBiz(updateId, updateBusiness)
    .then(() => {
      Businesses.findById(updateId).then(business =>
        res.status(200).json(business)
      );
    })
    .catch(error => {
      res.status(500).json(error);
    });

  //   Businesses.update(updateId, req.body)
  //     .then(updated => {
  //       if (!updateId) {
  //         res.status(404).json({
  //           message: "The business with the specified ID does not exist"
  //         });
  //       } else if (!req.body.address || !req.body.name) {
  //         res
  //           .status(400)
  //           .json({ message: "Please provide a business name and address" });
  //       } else {
  //         res.status(200).json(updated);
  //       }
  //     })
  //     .catch(error => {
  //       res
  //         .status(500)
  //         .json({ message: "The business information could not be modified" });
  //     });

  //   Businesses.findById(updateId)
  //     .then(res.json(req.body))
  //     .catch(error => {
  //       res.status(500).json(error);
  //     });
});

// DELETE for one business --working but returns an empty object with a 500 status

router.delete("/:id", (req, res) => {
  Businesses.remove(req.params.id)
    .then(res => {
      res
        .status(200)
        .json({ message: "The business was successfully deleted." });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
