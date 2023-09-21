const express = require("express");
const { createUser, loginUser } = require("./users.controller");
const {
  validateSignUp,
  validateLogin,
} = require("../middlewares/requestValidator");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("get all users");
});

router.post("/signup", validateSignUp, createUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;
