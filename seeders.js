const ItemModel = require("./models/items.model");
const UserModel = require("./models/users.model");

const db = require("./db");

db.connect()
  .then(async () => {
    await ItemModel.insertMany([
      {
        name: "Gucci Suit",
        price: 550,
        size: "Small",
        category: "Clothing",
      },
      {
        name: "Gucci Belt",
        price: 800,
        size: "Medium",
        category: "Accessories",
      },
      {
        name: "Patek watch",
        price: 2000,
        size: "Large",
        category: "Accessories",
      },
      {
        name: "Rayban shades",
        price: 500,
        size: "Small",
        category: "Accessories",
      },
      {
        name: "Prada shoes",
        price: 5500,
        size: "Medium",
        category: "Shoes",
      },
      {
        name: "Ralph Lauren shirt",
        price: 800,
        size: "Large",
        category: "Clothing",
      },
      {
        name: "Versace slides",
        price: 1000,
        size: "Small",
        category: "Shoes",
      },
      {
        name: "Adrien Cap",
        price: 300,
        size: "Medium",
        category: "Accessories",
      },
      {
        name: "Converse sneakers",
        price: 250,
        size: "Large",
        category: "Shoes",
      },
      {
        name: "Gucci Durag",
        price: 700,
        size: "Medium",
        category: "Accessories",
      },
    ]);

    await UserModel.insertMany([
      {
        username: "mujeeb",
        user_type: "Admin user",
        email: "mujeeb@example.com",
        password: "mujeeb12345",
      },
      {
        username: "daniel",
        email: "dan@example.com",
        password: "daniel12345",
      },
    ]);

    console.log("Data added to db successfully");
    process.exit(1);
  })
  .catch((err) => {
    console.log("An error occured while seeding", err);
  });
