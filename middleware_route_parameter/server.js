

const express = require("express");
const app = express();

const validateId = (req, res, next) => {
  const id = req.params.id;
  if (!isNaN(id)) {
    next(); 
  } else {
    res.status(400).send("ID must be a number");
  }
};


app.get("/user/:id", validateId, (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
