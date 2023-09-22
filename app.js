const express = require("express");
require("dotenv").config();
const app = express();
const sequelize = require("./config/sequelize");
const { User, Item } = require("./models/index");
const usersRouter = require("./users/users.router");
const itemsRouter = require("./items/items.router");

app.use(express.json());
app.use("/users", usersRouter);
app.use("/items", itemsRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((error) => {
    console.log("error connecting to db", error);
  });
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
