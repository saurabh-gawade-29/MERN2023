const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller")

//! Named Export
router.route("/contact").post(contactForm);

module.exports = router;
