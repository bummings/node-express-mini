// implement your API here
const express = require("express");
const server = express();

const greeter = require("./greeter.js");

server.get("/", (req, res) => {
  res.send("sup");
});

server.get("/greet", (req, res) => {
  res.json({ hello: "Stranger" });
});

server.get("/greet/:person", greeter);

server.listen(9000, () => console.log("yes!"));
