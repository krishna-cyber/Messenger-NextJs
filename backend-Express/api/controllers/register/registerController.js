/** @format */

const User = require("../../../models/userModel");

//registering user controller function

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  //checking user already existeance
  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  //creating new user and disselect password from response
  const newUser = await User.create({ username, email, password });
  res.status(200).json({
    message: "User registered successfully",
    user: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      avatar: newUser.avatar,
    },
  });
};

module.exports = { registerUser };
