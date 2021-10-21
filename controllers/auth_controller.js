const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.ListUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).send({ msg: "list of users", Users });
  } catch (error) {
    res.status(500).send({ mssg: "could not find any users" });
  }
};

exports.SignUp = async (req, res) => {
  const { name, email, password, passworda } = req.body;
  const saltRounds = 10;
  try {
    const finduser = await User.findOne({ email });
    if (finduser) {
      return res.status(400).send({ errors: [{ msg: "user already exists" }] });
    }
    const user = new User(req.body);
    const hash = bcrypt.hashSync(user.password, saltRounds);
    user.password = hash;
    user.passworda = hash;
    const token = jwt.sign({ ID: user._id }, process.env.Secretorkey);
    if (password !== passworda) {
      return res.status(400).send({ errors: [{ msg: "password do not match" }] });
    }
    await user.save();
    res.status(200).send({ msg: "user registred successfully", user, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "user did not register" }] });
  }
};

exports.SignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const finduser = await User.findOne({ email });
    if (!finduser) {
      return res.status(400).send({ errors: [{ msg: "verify entries" }] });
    }
    const match = await bcrypt.compareSync(password, finduser.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "verify enteries" }] });
    }
    const payload = { id: finduser._id };
    const token = jwt.sign(payload, process.env.Secretorkey);
    res.status(200).send({ msg: "signed in successfully ", finduser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "user did not signed in" }] });
  }
};
exports.DeleteUser = async (req, res) => {
  const { ID } = req.params;
  try {
    const RemovedUser = await User.findByIdAndDelete(ID);
    res.status(200).send({ msg: "User deleted", RemovedUser });
  } catch (error) {
    res.status(500).send({ msg: "could not delete user" });
  }
};
