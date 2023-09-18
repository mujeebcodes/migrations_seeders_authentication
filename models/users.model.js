const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  user_type: {
    type: String,
    required: true,
    default: "Regular user",
    enum: ["Admin user", "Regular user"],
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
