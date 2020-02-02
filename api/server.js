const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authR = require("../auth/auth-router.js");
const busR = require("../businesses/businesses-router.js");
const volR = require("../volunteers/volunteers-router.js");
const pickR = require("../pickups/pickups-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authR);
server.use("/api/business", busR);
server.use("/api/volunteer", volR);
server.use("/api/pickups", pickR);

module.exports = server;
