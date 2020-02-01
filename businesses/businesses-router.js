const router = require("express").Router();

const Businesses = require("./businesses-model.js");

//BUSINESS PROFILE ENDPOINTS

// GET for one business profile
//findById

router.get("/:id");

// PUT for one business profile
//findById, update

router.put("/:id");

// DELETE for one business profile
//findById, remove

router.delete("/:id");

module.exports = router;
