
const User = require("../models/userModel");

const validateUser = async (req, res, next) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).send("Username and email required");
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
        return res.status(400).send("Email already exists");
    }

    next();
};

module.exports = validateUser;
