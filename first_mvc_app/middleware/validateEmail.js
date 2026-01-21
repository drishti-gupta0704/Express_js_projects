
function validateEmail(req, res, next) {
    if (!req.body.email) {
        return res.status(400).send("Email is required");
    }
    next();
}

module.exports = validateEmail;
