

const users = require("../models/userModel");

// CREATE user
exports.createUser = (req, res) => {
    const { username, email } = req.body;

    const user = {
        id: users.length + 1,
        username,
        email
    };

    users.push(user);
    res.status(201).json(user);
};

// GET all users
exports.getAllUsers = (req, res) => {
    res.json(users);
};

// GET user by ID
exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.json(user);
};

// UPDATE user
exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, email } = req.body;

    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).send("User not found");
    }

    if (username) user.username = username;
    if (email) user.email = email;

    res.json(user);
};

// DELETE user
exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).send("User not found");
    }

    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
};
