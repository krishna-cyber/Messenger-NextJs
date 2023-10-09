/** @format */
const express = require("express");

//creating express router for routing
const router = express.Router();

//importing register controller
const { registerUser } = require("./controllers/register/registerController");

//registering user

router.post("/register", registerUser);

//get user information
router.post("/getUser", (req, res) => {
  res.send("user information");
});

module.exports = router;
