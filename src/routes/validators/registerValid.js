const { check } = require("express-validator");

module.exports = [
  check("fullname")
    .exists()
    .withMessage("Please fill the fullname field")
    .notEmpty()
    .withMessage("Fullname fields must not be empty!"),

  check("email")
    .exists()
    .withMessage("Please fill the email field")
    .notEmpty()
    .withMessage("Email fields must not be empty!")
    .isEmail()
    .withMessage("Invalid email!"),

  check("password")
    .exists()
    .withMessage("Please fill the password field")
    .notEmpty()
    .withMessage("Password fields must not be empty!")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 characters!"),

  check("confirm_pass")
    .exists()
    .withMessage("Please fill the confirm password field")
    .notEmpty()
    .withMessage("Confirm password fields must not be empty!")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 characters!"),
];
