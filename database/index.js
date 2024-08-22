const mongoose = require("mongoose")

async function connectToDatabase() {
  try 
  {
    const connectionstats = await mongoose.connect(`${process.env.MONGODB_URL}`);
    if (connectionstats) {
      console.log("database connected successfully.");
    } else {
      console.log("database connection fail....!!!!");
    }
  }
   catch (error) {
    console.log("error while connecting database....!!",error);
  }
}
module.exports = {
  connectToDatabase
}




