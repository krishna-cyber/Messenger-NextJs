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

//importing conversation controller
const {
  registerConversation,
  getConversations,
} = require("./controllers/conversationController/conversationController");
//registering user

router.post("/register", registerUser);

//login authentication
router.post("/login", authenticate);

//get all contacts
router.get("/contacts", getContacts);

//get all conversations
router.post("/conversations", getConversations);
module.exports = router;
