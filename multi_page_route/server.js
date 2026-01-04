
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Home Page");
});


app.get("/about", (req, res) => {
  res.send("About Page");
});


app.get("/contact", (req, res) => {
  res.send("Contact Page");
});


app.listen(PORT, () => {
  console.log("Server running on port 3000");
});

