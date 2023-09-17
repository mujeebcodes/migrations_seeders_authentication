const express = require("express");
const app = express();
const usersRouter = require("./users/users.router");
const itemsRouter = require("./items/items.router");
const db = require("./db");
db.connect();

app.use(express.json());
app.use("/users", usersRouter);
app.use("/items", itemsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
