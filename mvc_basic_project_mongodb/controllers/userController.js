
const User = require("../models/userModel");

// CREATE user
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// GET all users
exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

// GET user by ID
exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
};

// UPDATE user
exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!user) return res.status(404).send("User not found");
    res.json(user);
};

// DELETE user
exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
};
