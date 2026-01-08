
const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("Query Params Project");
});


app.get("/search", (req, res) => {
  const term = req.query.term;
  const limit = req.query.limit;

  res.send(`Searching for "${term}" with limit ${limit}`);
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});