const express = require("express");
const { createUser } = require("./users.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("get all users");
});

router.post("/signup", createUser);

module.exports = router;
