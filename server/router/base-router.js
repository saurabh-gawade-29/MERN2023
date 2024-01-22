const express = require("express");
const router = express.Router();
const baserouter = express.Router();

//! Named Export
router.route("/").get((req, res) => {
  res.status(200).send("Welcome to MERN");
});

module.exports = baserouter;
