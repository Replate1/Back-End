const router = require("express").Router();

const Volunteers = require("./volunteers-model.js");

//VOLUNTEER PROFILE ENDPOINTS

// GET for one volunteer profile
//findById

router.get("/:id");

// PUT for one volunteer profile
//findById, update

router.put("/:id");

// DELETE for one volunteer profile
//findById, remove

router.delete("/:id");

module.exports = router;
