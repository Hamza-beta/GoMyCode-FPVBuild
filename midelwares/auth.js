const User = require("../models/user");
const jwt = require("jsonwebtoken");
exports.IsAuth = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    if (!token) {
      return res.status(400).send("not authorized");
    }
    const decoded = jwt.verify(token, process.env.SecretOrKey);
    const user = await User.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).send("server error");
  }
};
