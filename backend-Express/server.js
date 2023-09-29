/** @format */
require("dotenv").config();
const express = require("express");

//importing routes
const router = require("./api/routes");

//importing database connection file
const dbConnection = require("./db/dbConnect");

//creating server instance
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

//creating server instance and connecting to the database
const server = app.listen(process.env.PORT, () => {
  dbConnection();
  console.log(`Server is running on port ${process.env.PORT}`);
});
