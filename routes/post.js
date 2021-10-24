const express = require("express");
const {
  CreatePost,
  ListPost,
  ListUserPost,
  DeletedPost,
  OnePost,
  EditPost,
  EditOnePost,
} = require("../controllers/post_controller");
const { IsAuth } = require("../midelwares/auth");
const { upload } = require("../midelwares/upload_midelware");
const router = express.Router();
router.post(
  "/CreatePost",
  IsAuth,
  upload.fields([
    { name: "backgroundimage", maxCount: 1 },
    { name: "photos", maxCount: 12 },
  ]),
  CreatePost
);
router.get("/ListPost", ListPost);
router.get("/ListUserPost", IsAuth, ListUserPost);
router.delete("/DeletedPost/:ID", IsAuth, DeletedPost);
router.get("/OnePost/:ID", IsAuth, OnePost);
router.put(
  "/EditPost/:ID",
  IsAuth,
  upload.fields([
    { name: "backgroundimage", maxCount: 1 },
    { name: "photos", maxCount: 12 },
  ]),
  EditPost
);
router.get("/EditOnePost/:ID", IsAuth, EditOnePost);
module.exports = router;
