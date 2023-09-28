/** @format */
const express = require("express");

//creating express router for routing
const router = express.Router();

//importing register controller
const registerController = require("./controller");

//registering user

router.post("/register", registerController.registerUser);
