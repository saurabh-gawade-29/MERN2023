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
  try {
    res.status(200).send("Register Page");
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
