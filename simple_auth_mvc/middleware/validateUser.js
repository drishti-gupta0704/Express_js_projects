
// middleware/validateUser.js
const users = require("../models/userModel");

function validateUser(req, res, next) {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).send("Username and email are required");
    }

    const emailExists = users.find(u => u.email === email);
    if (emailExists) {
        return res.status(400).send("Email already exists");
    }

    next();
}

module.exports = validateUser;
