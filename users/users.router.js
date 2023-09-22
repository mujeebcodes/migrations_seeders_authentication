const express = require("express");
const { createUser, loginUser } = require("./users.controller");
const {
  validateSignUp,
  validateLogin,
} = require("../middlewares/requestValidator");
const router = express.Router();

router.post("/signup", validateSignUp, createUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;
