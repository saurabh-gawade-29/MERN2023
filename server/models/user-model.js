const mongoose = require("mongoose");

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

//! Define model name or the collection name
//* it will automatic create users collection in atlas
const User = new mongoose.model("User", userSchema);
module.exports = User;
