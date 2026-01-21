
const express = require("express");
const router = express.Router();
const validateEmail = require("../middleware/validateEmail");
const { registerUser } = require("../controllers/userController");

router.post("/register", validateEmail, registerUser);

module.exports = router;
