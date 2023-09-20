const ItemModel = require("../models/items.model");

const getItems = async (req, res) => {
  const items = await ItemModel.find({});
  res.status(200).json({
    message: "success",
    data: { items },
  });
};

module.exports = getItems;
