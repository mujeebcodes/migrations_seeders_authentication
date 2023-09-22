const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../models");

const createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists, please login",
      });
    }

    const userDetails = { id: uuidv4(), ...req.body };

    const newUser = await User.create(userDetails);

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.LOGIN_EXPIRES,
      }
    );

    return res.status(201).json({
      status: "success",
      data: { user: newUser, token },
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const providedDetails = req.body;
  const userInDb = await User.findOne({
    where: { email: providedDetails.email },
  });
  if (!userInDb) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const validPassword = await bcrypt.compare(
    providedDetails.password,
    userInDb.password
  );
  if (!validPassword) {
    return res.status(422).json({
      message: "Email and/or password not correct",
    });
  }

  const token = await jwt.sign(
    { id: userInDb.id, email: userInDb.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.LOGIN_EXPIRES }
  );

  return res.status(201).json({
    message: "Login successful",
    userInDb,
    token,
  });
};

module.exports = {
  createUser,
  loginUser,
};
