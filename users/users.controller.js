const UserModel = require("../models/users.model");

const createUser = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);

    return res.status(201).json({
      status: "success",
      data: { user: newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
