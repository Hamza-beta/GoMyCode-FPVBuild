const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  body: { type: String, required: true },
});
module.exports = mongoose.model("Comment", CommentSchema);
