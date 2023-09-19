const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserModel = require("../models/users.model");

const createUser = async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists, please login",
      });
    }
    const newUser = await UserModel.create(req.body);

    const token = jwt.sign(
      { _id: newUser._id, email: newUser.email },
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
  const userInDb = await UserModel.findOne({ email: providedDetails.email });
  if (!userInDb) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const validPassword = await userInDb.isValidPassword(
    providedDetails.password
  );

  if (!validPassword) {
    return res.status(422).json({
      message: "Email and/or password not correct",
    });
  }

  const token = await jwt.sign(
    { _id: userInDb._id, email: userInDb.email },
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
