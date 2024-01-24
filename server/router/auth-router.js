const express = require("express");
const router = express.Router();
//! Named Export
// const { home, register, login } = require("../controllers/auth-controller");
const authControllers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signupSchema, loginSchema } = require("../validators/auth-validator");

//TODO: http://localhost:5000/api/auth/
router.route("/").get(authControllers.home);

//TODO: http://localhost:5000/api/auth/register
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);

//TODO: http://localhost:5000/api/auth/login
router.route("/login").post(validate(loginSchema), authControllers.login);

module.exports = router;
