
const express = require("express");
const app = express();


const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === "12345") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};


app.get("/public", (req, res) => {
  res.send("Public route");
});


app.get("/private", auth, (req, res) => {
  res.send("Private route");
});



app.listen(3000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
