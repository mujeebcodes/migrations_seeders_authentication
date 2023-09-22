const express = require("express");
require("dotenv").config();
const app = express();
const usersRouter = require("./users/users.router");
const itemsRouter = require("./items/items.router");
const ItemModel = require("./models/items.model");
const UserModel = require("./models/users.model");

const db = require("./db");
db.connect();

app.use(express.json());
app.use("/users", usersRouter);
app.use("/items", itemsRouter);

app.get("/testuser", async (req, res) => {
  const users = await UserModel.find({});
  return res.status(200).json({ users });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
