const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true, enum: ["Small", "Medium", "Large"] },
  category: String,
});

const ItemModel = mongoose.model("items", itemSchema);
module.exports = ItemModel;
