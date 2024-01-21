const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/MERN2023";

const connectToDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful to DB");
  } catch (error) {
    console.error("DB Connection Failed");
    process.exit(0);
  }
};

module.exports = connectToDB;
