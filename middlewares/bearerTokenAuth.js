const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();

const tokenAuth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      return res.status(401).json({
        message: "You are not authorized. Please provide a token",
      });
    }
    const token = header.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id } });
    if (!user) {
      return res.status(401).json({
        message: "You are not authorized",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "You are not authorized",
    });
  }
};

module.exports = tokenAuth;
