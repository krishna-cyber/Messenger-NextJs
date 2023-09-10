/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversationSchema = new Schema(
  {
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    lastMessageId: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    lastMessageDate: {
      type: Date,
    },
    seenBy: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        timestamp: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
