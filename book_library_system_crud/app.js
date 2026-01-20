
/*
{
  "id": 1,
  "title": "Atomic Habits",
  "author": "James Clear",
  "available": true
}

*/

const express = require("express");
const app = express();

app.use(express.json());

// In-memory database
let books = [];

// ---------------- CREATE → Add a Book ----------------
app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).send("Title and author are required");
    }

    const book = {
        id: books.length + 1,
        title,
        author,
        available: true
    };

    books.push(book);
    res.status(201).json(book);
});

// ---------------- READ → Get All Books ----------------
app.get("/books", (req, res) => {
    res.json(books);
});

// ---------------- READ → Get Book by ID ----------------
app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) return res.status(404).send("Book not found");

    res.json(book);
});

// ---------------- UPDATE → Update Book Details ----------------
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;

    const book = books.find(b => b.id === id);
    if (!book) return res.status(404).send("Book not found");

    if (title) book.title = title;
    if (author) book.author = author;

    res.json(book);
});

// ---------------- BORROW BOOK ----------------
app.put("/books/borrow/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) return res.status(404).send("Book not found");

    if (!book.available) {
        return res.status(400).send("Book already borrowed");
    }

    book.available = false;
    res.json({ message: "Book borrowed successfully", book });
});

// ---------------- RETURN BOOK ----------------
app.put("/books/return/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) return res.status(404).send("Book not found");

    if (book.available) {
        return res.status(400).send("Book is already available");
    }

    book.available = true;
    res.json({ message: "Book returned successfully", book });
});

// ---------------- DELETE → Remove Book ----------------
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index === -1) return res.status(404).send("Book not found");

    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
});

// ---------------- Start Server ----------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
