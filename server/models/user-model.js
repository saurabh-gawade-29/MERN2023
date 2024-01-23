const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//! Need to Create new object of the Schema - BluePrint-> Object
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    require: true,
  },
});

//TODO: Secure your password with brcrpt
//! It's Work Like Middleware - Pre Method in mongoose Schema
userSchema.pre("save", async function (next) {
  debugger;
  console.log(this, "All the Data from register Controller");
  let user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, saltRound);
    user.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

//TODO: We Can Create Multiple Methods in userSchema
userSchema.methods.generateToken = async function () {
  debugger;
  console.log(this, "what in this this");
  try {
    //* JWT Parameter: payload, secretOrPrivateKey, options
    return await jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error, "Error in generateToken");
  }
};

//! Compare Password Method
userSchema.methods.comparePassword = async function (password) {
  debugger;
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error, "Error in comaprePassword");
  }
};

//! Define model name or the collection name
//* it will automatic create users collection in atlas
const User = new mongoose.model("User", userSchema);
module.exports = User;
