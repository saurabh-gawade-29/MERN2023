//! Imports
const User = require("../models/user-model");
const bcrypt = require("bcrypt");

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
    let { username, email, phone, password, isAdmin } = req.body;
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
      isAdmin,
    });
    res.status(201).json({
      // msg: userCreated,
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

//TODO: Login Logic
const login = async (req, res) => {
  debugger;
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({
        msg: "Invalid Credentials",
      });
    }
    // const user = await bcrypt.compare(password, this.password);
    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(201).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    res.status(500).json({ error: error, msg: "Internal Server Error" });
  }
};

//! Named Export
module.exports = {
  home,
  register,
  login,
};
