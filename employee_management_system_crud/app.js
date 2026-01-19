
/*
{
  "id": 1,
  "name": "Amit",
  "department": "IT",
  "salary": 50000
}

*/

const express = require("express");
const app = express();

app.use(express.json());

// In-memory database
let employees = [];

// ---------------- CREATE → Add Employee ----------------
app.post("/employees", (req, res) => {
    const { name, department, salary } = req.body;

    if (!name || !department || salary == null) {
        return res.status(400).send("Name, department and salary are required");
    }

    if (salary < 0) {
        return res.status(400).send("Salary cannot be negative");
    }

    const employee = {
        id: employees.length + 1,
        name,
        department,
        salary
    };

    employees.push(employee);
    res.status(201).json(employee);
});

// ---------------- READ → Get All Employees ----------------
app.get("/employees", (req, res) => {
    res.json(employees);
});

// ---------------- READ → Get Employee by ID ----------------
app.get("/employees/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(e => e.id === id);

    if (!employee) return res.status(404).send("Employee not found");

    res.json(employee);
});

// ---------------- UPDATE → Update Employee Details ----------------
app.put("/employees/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, department, salary } = req.body;

    const employee = employees.find(e => e.id === id);
    if (!employee) return res.status(404).send("Employee not found");

    if (salary != null && salary < 0) {
        return res.status(400).send("Salary cannot be negative");
    }

    if (name) employee.name = name;
    if (department) employee.department = department;
    if (salary != null) employee.salary = salary;

    res.json(employee);
});

// ---------------- DELETE → Remove Employee ----------------
app.delete("/employees/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = employees.findIndex(e => e.id === id);

    if (index === -1) return res.status(404).send("Employee not found");

    const deletedEmployee = employees.splice(index, 1);
    res.json(deletedEmployee[0]);
});

// ---------------- Start Server ----------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
