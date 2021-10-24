const express = require("express");
const Connectdb = require("./config/connectDb");
const router = require("./routes/auth");
const routerPost = require("./routes/post");
const routerComment = require("./routes/comment");

require("dotenv").config();
const app = express();
Connectdb();
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/users", router);
app.use("/api/posts", routerPost);
app.use("/api/comments", routerComment);
app.listen(process.env.port, () => console.log(`server is running on port ${process.env.port}`));
