
const express = require("express");
const app = express();

app.use(express.json()); 

// Dummy in-memory database
let products = []; // array to store products


app.post("/products", (req, res) => {
    const { name, price, stock } = req.body;

    // Validation
    if (!name || price == undefined || stock == undefined) {
        return res.status(400).send("Name, price, and stock are required");
    }

    if (price < 0 || stock < 0) {
        return res.status(400).send("Price and stock cannot be negative");
    }

    const product = {
        id: products.length + 1,
        name,
        price,
        stock
    };

    products.push(product);
    res.status(201).json(product);
});


app.get("/products", (req, res) => {
    res.json(products);
});


app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) return res.status(404).send("Product not found");

    res.json(product);
});


app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { price, stock } = req.body;

    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).send("Product not found");

    // Only update price or stock
    if (price != undefined) {
        if (price < 0) return res.status(400).send("Price cannot be negative");
        product.price = price;
    }

    if (stock != undefined) {
        if (stock < 0) return res.status(400).send("Stock cannot be negative");
        product.stock = stock;
    }

    res.json(product);
});

// 
app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).send("Product not found");

    const deletedProduct = products.splice(index, 1);
    res.json(deletedProduct[0]);
});

// 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


/*
Absolutely! ✅ Let’s create a Product Catalog CRUD API in Node.js + Express with in-memory storage and the extra features you mentioned.

This will include:

Prevent negative stock

Update only price or stock

Basic number validation


*/