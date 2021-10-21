const Comment = require("../models/comment");
exports.CreateComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();

    res.status(200).send({ msg: "commented successfully", newComment });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not create comment" }] });
  }
};

exports.DeleteComment = async (req, res) => {
  try {
  } catch (error) {}
};
