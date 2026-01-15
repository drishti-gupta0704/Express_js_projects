
const express = require("express");
const router = express.Router();
const validateEmail = require("../middleware/validateEmail");

router.post("/register", validateEmail, (req, res) => {
    res.send("User registered successfully");
});

module.exports = router;
