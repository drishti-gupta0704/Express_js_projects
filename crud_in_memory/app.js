
const express = require("express");
const app = express();

app.use(express.json()); // parsing JSON body

// its a dummy in-memory database
let users = [];


  // create → Add a User
 
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }

    const user = {
        id: users.length + 1,
        name,
        email
    };

    users.push(user);
    res.status(201).json(user);
});


  // read → Get All Users
  
app.get("/users", (req, res) => {
    res.json(users);
});


   // read → Get User by ID

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.json(user);
});


   // update → Update User
   
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).send("User not found");
    }

    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});


  // delete → Remove User
   
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).send("User not found");
    }

    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
});

   
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
