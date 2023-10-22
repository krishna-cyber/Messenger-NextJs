/** @format */
const express = require("express");

//creating express router for routing
const router = express.Router();

//importing register controller
const {
  registerUser,
  authenticate,
  getContacts,
} = require("./controllers/userController/userController");

//getuser data for login and others

//registering user

router.post("/register", registerUser);

//login authentication
router.post("/login", authenticate);

//get all contacts
router.get("/contacts", getContacts);
module.exports = router;
