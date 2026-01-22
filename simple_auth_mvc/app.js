
//entry point , app.js should NOT contain business logic

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// base route
app.use("/users", userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
