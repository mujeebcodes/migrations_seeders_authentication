const express = require("express");
const { createUser, loginUser } = require("./users.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("get all users");
});

router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;
