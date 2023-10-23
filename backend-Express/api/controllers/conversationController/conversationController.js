/** @format */

const Conversation = require("../../../models/conversationModel");

//register new conversation controller function

const registerConversation = async (req, res) => {
  const { members } = req.body;

  if (!members) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  //checking conversation already existeance
  const conversation = await Conversation.findOne({ members });

  if (conversation) {
    return res.status(400).json({ message: "Conversation already exists" });
  }

  //creating new conversation and disselect password from response
  const newConversation = await Conversation.create({ members });
  res.status(200).json({
    message: "Conversation registered successfully",
    conversation: {
      id: newConversation._id,
      members: newConversation.members,
    },
  });
};
//get all conversation of user controller function
const getConversations = async (req, res) => {
  const { userId } = req.body;

  //get all the conversation from database
  const conversations = await Conversation.find({
    members: { $in: [userId] },
  });

  // returning conversation with conversation id and members
  res.status(200).json({
    message: "Conversations fetched successfully",
    conversations: conversations.map((conversation) => {
      return {
        id: conversation._id,
        members: conversation.members,
      };
    }),
  });
};

module.exports = { registerConversation, getConversations };
