
const express = require("express");
const app = express();

app.use(express.json()); // Parsing JSON bodies

// Dummy in-memory database
let students = []; // array to store students

// CREATE - Add Student
app.post("/students", (req, res) => {
    const { name, age, email } = req.body;

    if (!name || !age || !email) {
        return res.status(400).send("Name, age, and email are required");
    }

    const student = {
        id: students.length + 1,
        name,
        age,
        email
    };

    students.push(student);
    res.status(201).json(student);
});

//  READ - Get All Students 
app.get("/students", (req, res) => {
    res.json(students);
});

//  READ - Get Student by ID 
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) return res.status(404).send("Student not found");

    res.json(student);
});

// UPDATE → Update Student 
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, email } = req.body;

    const student = students.find(s => s.id === id);
    if (!student) return res.status(404).send("Student not found");

    if (name) student.name = name;
    if (age) student.age = age;
    if (email) student.email = email;

    res.json(student);
});

// DELETE - Remove Student 
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) return res.status(404).send("Student not found");

    const deletedStudent = students.splice(index, 1);
    res.json(deletedStudent[0]);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
