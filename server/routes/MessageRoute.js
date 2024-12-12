const express = require("express");
const route = express.Router();
const messageModel = require("../models/MessageModel");

route.get("/get", (req, res) => {
  try {
    res.status(202).send("hello world on express");
  } catch (error) {
    res.status(400).send("err is: " + error);
  }
});

route.post("/post", (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).send("name or email , message is empty");
    }

    res.status(200).send("name: " + name);
  } catch (error) {
    res.status(400).send("error is: " + error);
  }
});

module.exports = route;
