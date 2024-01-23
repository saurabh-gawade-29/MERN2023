const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
//! Define model name or the collection name
//* it will automatic create users collection in atlas
const User = new mongoose.model("User", userSchema);
module.exports = User;
