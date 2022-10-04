const express = require("express");
const UserModel = require("../src/models/users.model");

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.contentType("application/json");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const port = 8080;

app.listen(port, () => {
  console.log(`Rodando server na porta ${8080}`);
});
