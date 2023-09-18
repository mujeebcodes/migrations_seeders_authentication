const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

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

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

UserSchema.pre("insertMany", async function (next, docs) {
  try {
    for (const doc of docs) {
      const hash = await bcrypt.hash(doc.password, 10);
      doc.password = hash;
    }
  } catch (error) {
    console.log(error);
  }

  next();
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
