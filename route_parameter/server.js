

const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("Route Params Project");
});


app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});


app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Category: ${category}, Product ID: ${id}`);
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
