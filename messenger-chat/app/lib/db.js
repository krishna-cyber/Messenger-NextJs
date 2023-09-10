/** @format */

const mongoose = require("mongoose");

// create a connecton
const connection = {};

//Define a function to connect to the database
async function connectDB() {
  if (connection.isConnected) {
    return;
  }
  //use mongoose to connect to the database
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  //set the connection isConnected to true
  connection.isConnected = db.connections[0].readyState;
}

//export the connectDB function
module.exports = connectDB;
