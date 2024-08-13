const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    const connectionstats = await mongoose.connect(
      "mongodb+srv://tharugovinda835:govinda835@cluster0.z9dyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    if (connectionstats) {
      console.log("database connected successfully.");
    } else {
      console.log("database connection failed....!!!");
    }
  } catch (error) {
    console.log("error while connecting database....!!", error);
  }
}

module.exports = connectToDatabase;
