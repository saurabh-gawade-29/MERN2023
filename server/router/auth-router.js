const express = require("express");
const router = express.Router();
//! Named Export
// const { home, register, login } = require("../controllers/auth-controller");
const authControllers = require("../controllers/auth-controller");

//TODO: http://localhost:5000/api/auth/
router.route("/").get(authControllers.home);

//TODO: http://localhost:5000/api/auth/register
router.route("/register").post(authControllers.register);

//TODO: http://localhost:5000/api/auth/login
router.route("/login").get(authControllers.login);

module.exports = router;
