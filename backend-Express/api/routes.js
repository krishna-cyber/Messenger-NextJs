/** @format */
const express = require("express");

//creating express router for routing
const router = express.Router();

//importing register controller
const {
  registerUser,
  getUser,
} = require("./controllers/userController/userController");

//getuser data for login and others

//registering user

router.post("/register", registerUser);

//get user information
router.post("/getUser", getUser);

module.exports = router;
