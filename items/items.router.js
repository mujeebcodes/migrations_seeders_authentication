const express = require("express");
const tokenAuth = require("../middlewares/bearerTokenAuth");
const getItems = require("./items.controller");
const router = express.Router();

router.use(tokenAuth);

router.get("/", getItems);

module.exports = router;
