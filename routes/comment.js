const express = require("express");
const { CreateComment } = require("../controllers/comment_controller");
const router = express.Router();

router.post("/CreateComment", CreateComment);

module.exports = router;
