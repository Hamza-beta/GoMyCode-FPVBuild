const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  buildname: { type: String, required: true },
  backgroundimage: [],
  description: { type: String },
  photos: [],
  partslist: { type: String },
  dateOfCreactionPost: { type: Date, default: Date.now() },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
module.exports = mongoose.model("Post", PostSchema);
