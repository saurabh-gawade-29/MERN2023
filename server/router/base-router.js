const express = require("express");
const baserouter = express.Router();
const contactForm = require("../controllers/contact-controller")

//! Named Export
baserouter.route("/").get((req, res)=> {
    res.send("Welcome to MERN2023")
});
baserouter.route("/contact").post(contactForm);

module.exports = baserouter;
