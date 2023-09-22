const { Item } = require("../models");

const getItems = async (req, res) => {
  try {
    const items = await Item.findAll({});
    return res.status(200).json({
      items,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getItems;
