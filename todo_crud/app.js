
const express = require("express");
const app = express();

app.use(express.json());

// In-memory database
let todos = [];
let nextId = 1;

/*
Todo Structure:
{
  id: Number,
  title: String,
  completed: Boolean
}
*/

// CREATE – Add a Todo
app.post("/todos", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).send("Title is required");
  }

  const todo = {
    id: nextId++,
    title,
    completed: false
  };

  todos.push(todo);
  res.status(201).json(todo);
});

//  READ – Get All Todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

//  READ – Get Todo by ID
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  res.json(todo);
});

//  UPDATE – Update Todo
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

//  DELETE – Remove Todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).send("Todo not found");
  }

  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
