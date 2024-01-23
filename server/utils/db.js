const mongoose = require("mongoose");

//! using shell =>  mongosh
// const URI = "mongodb://127.0.0.1:27017/MERN2023";

//TODO: if you use  @ ====> %40   <== use this at that place
//! using atlas
const URI = process.env.MONGODB_URL;

const connectToDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful to DB");
  } catch (error) {
    console.log(error);
    console.error("DB Connection Failed");
    process.exit(0);
  }
};

module.exports = connectToDB;
