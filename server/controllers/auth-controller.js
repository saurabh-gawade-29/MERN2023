//! Imports
const User = require("../models/user-model");
// const bcrypt = require('bcrypt');

//TODO: Home Logic
const home = async (req, res) => {
  try {
    res.status(200).send("Home");
  } catch (error) {
    console.log("ERROR", error);
  }
};

//TODO: Register Logic
const register = async (req, res) => {
  debugger;
  try {
    let { username, email, phone, password } = req.body;
    //* Check for User Exist
    let userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "Email is already Exist" });
    }
    //! BcryptJS - We Do it in User Model - Centralized Way
    //* hash = password + Salt
    //* Number of salt rounds, determines the complexity of the hash
    // const saltRounds = 10;
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hash = bcrypt.hashSync(password, salt);
    //* If User Not Present
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(200).json({ msg: userCreated });
  } catch (error) {
    console.log("ERROR", error);
  }
};

//TODO: Login Logic
const login = async (req, res) => {
  try {
    res.status(200).send("Login Page");
  } catch (error) {
    console.log("ERROR", error);
  }
};

//! Named Export
module.exports = {
  home,
  register,
  login,
};
