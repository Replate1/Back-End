const router = require("express").Router();

const Pickups = require("./pickups-model.js");

// FOR BUSINESSES

//POST for a business to create a new pickup /
//need add function

//PUT for a business to edit its pickup by id /:id
//need update, findById

//GET for a business to see all of its pickups /business/:id
//need findById (req.params.id)

//DELETE for a business to cancel its pickup /:id
//remove, findById

// FOR VOLUNTEERS

//GET for a volunteer to see all unassigned pickups /open-requests
//need find (where there is no volunteerId)

//GET for a volunteer to see one pickup by id /:id
//need findById

//GET for a volunteer to see all of its accepted pickups /volunteer/:id
//need findById (req.params.id)

//PUT for a volunteer to accept a pickup /:id
//need findById, update

//PUT for a volunteer to cancel a pickup /:id
//need findById, update
