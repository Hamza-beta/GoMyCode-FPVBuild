const Post = require("../models/post");
const user = require("../models/user");
exports.CreatePost = async (req, res) => {
  try {
    const userPost = await user.findById(req.user._id);
    //console.log(userPost);
    var file = req.files;
    console.log(file);
    const newPost = new Post({ ...req.body, photos: req.files, userId: req.user._id });
    await newPost.save();
    userPost.posts = [...userPost.posts, newPost];
    await userPost.save();
    res.status(200).send({ msg: "posted successfully", newPost, userPost });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not create post" }, error] });
  }
};
exports.ListPost = async (req, res) => {
  try {
    const Posts = await Post.find();
    res.status(200).send({ msg: "All posts listed", Posts });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not list poats" }] });
  }
};
exports.ListUserPost = async (req, res) => {
  try {
    const ListUserPost = await Post.find({ userId: req.user._id }).populate("userId");
    res.status(200).send({ msg: "all current posts", ListUserPost });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not list current posts" }] });
  }
};
exports.DeletedPost = async (req, res) => {
  try {
    const DeletedPost = await Post.deleteOne({ userId: req.user._id });
    res.status(200).send({ msg: "Post Deleted", DeletedPost });
  } catch (error) {
    res.status(500).send({ msg: "could not delete Post" });
  }
};
exports.OnePost = async (req, res) => {
  const { ID } = req.params;
  try {
    const OnePost = await Post.findById(ID);
    res.status(200).send({ msg: "one post found", OnePost });
  } catch (error) {
    res.status(500).send({ msg: "could not find post" });
  }
};

exports.EditPost = async (req, res) => {
  const { ID } = req.params;
  try {
    const Edited = await Post.findByIdAndUpdate(ID, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "updated post", Edited });
  } catch (error) {
    res.status(500).send({ msg: "could not update post" });
  }
};
