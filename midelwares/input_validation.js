const { body, validationResult } = require("express-validator");
exports.RegisterValidation = [
  body("name", "please enter your name").notEmpty(),
  body("email", "please enter your email").isEmail(),
  body("password", "enter your password at leat 8 charecters").isLength({
    min: 8,
  }),
];
exports.LoginValidation = [
  body("email", "please enter your email").isEmail(),
  body("password", "enter your password at leat 8 charecters").isLength({
    min: 8,
  }),
];

exports.InputValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: error.array() });
  }
  next();
};
