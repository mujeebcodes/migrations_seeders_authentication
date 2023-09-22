const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("./users.controller");
const {
  validateSignUp,
  validateLogin,
} = require("../middlewares/requestValidator");

router.post("/signup", validateSignUp, createUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;
