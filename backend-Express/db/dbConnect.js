/** @format */

const mongoose = require("mongoose");

//starting server
const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      console.log(`connected to db instance 🕸️📑 ${db.connection.host}`);
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB Atlas");
      console.log(err);
    });
};

module.exports = dbConnection;
