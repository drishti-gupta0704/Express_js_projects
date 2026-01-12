
const express = require("express");

const app = express();

const validateId = (req, res, next) => {
  const id = req.params.id;

  if (!isNaN(id)) {
    next(); 
  } else {
    res.status(400).send("Invalid ID");
  }
};


const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === "12345") {
    next(); 
  } else {
    res.status(401).send("Unauthorized");
  }
};


const logger = (req, res, next) => {
  console.log(`Admin accessed with ID: ${req.params.id}`);
  next(); 
};


app.get(
  "/admin/:id",
  validateId,   
  auth,         
  logger,       
  (req, res) => {
    res.send(`Admin ID ${req.params.id} accessed successfully`);
  }
);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
