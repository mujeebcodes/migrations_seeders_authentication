const express = require("express");
const getItems = require("./items.controller");
const tokenAuth = require("../middlewares/bearerTokenAuth");
const router = express.Router();

router.use(tokenAuth);
router.get("/", getItems);

module.exports = router;
