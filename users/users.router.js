const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("get all users");
});

module.exports = router;
