const mongoose = require("mongoose");
const User = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  passworda: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});
module.exports = mongoose.model("User", User);
