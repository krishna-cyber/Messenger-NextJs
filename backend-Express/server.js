/** @format */
require("dotenv").config();
const express = require("express");
const app = express();

//importing database connection file
const dbConnection = require("./db/dbConnect");

//creating server instance and connecting to the database
const server = app.listen(process.env.PORT, () => {
  dbConnection();
  console.log(`Server is running on port ${process.env.PORT}`);
});
