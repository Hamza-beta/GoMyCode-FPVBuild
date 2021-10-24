const express = require("express");
const { SignUp, SignIn, ListUsers, DeleteUser } = require("../controllers/auth_controller");
const { IsAuth } = require("../midelwares/auth");
const { RegisterValidation, InputValidation, LoginValidation } = require("../midelwares/input_validation");
const router = express.Router();

router.post("/SignUp", RegisterValidation, InputValidation, SignUp);
router.post("/SignIn", LoginValidation, InputValidation, SignIn);
router.get("/Current", IsAuth, (req, res) => res.send({ user: req.user }));
router.get("/ListUsers", ListUsers);
router.delete("/DeleteUser/:ID", IsAuth, DeleteUser);

module.exports = router;
