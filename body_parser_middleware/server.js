
const express = require("express");
const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  res.send({
    message: "User created successfully",
    name,
    email
  });
});


app.put("/user", (req, res) => {
  const { name } = req.body;

  res.send({
    message: "User updated successfully",
    updatedName: name
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
