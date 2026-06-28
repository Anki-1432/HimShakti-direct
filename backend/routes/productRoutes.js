const express = require("express");
const router = express.Router();

let products = require("../data/products");

// ==============================
// GET ALL PRODUCTS
// ==============================
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// ==============================
// SEARCH PRODUCT
// Example:
// GET /api/products/search?q=juice
// ==============================
router.get("/search", (req, res) => {

  const keyword = (req.query.q || "").toLowerCase();

  const result = products.filter(product =>
    product.name.toLowerCase().includes(keyword) ||
    product.category.toLowerCase().includes(keyword)
  );

  res.status(200).json(result);

});

// ==============================
// GET SINGLE PRODUCT
// ==============================
router.get("/:id", (req, res) => {

  const id = Number(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json(product);

});

// ==============================
// ADD PRODUCT
// ==============================
router.post("/", (req, res) => {

  const { name, category, price, stock } = req.body;

  if (!name || !category || !price || !stock) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    stock
  };

  products.push(newProduct);

  res.status(201).json(newProduct);

});

// ==============================
// UPDATE PRODUCT
// ==============================
router.put("/:id", (req, res) => {

  const id = Number(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, category, price, stock } = req.body;

  product.name = name ?? product.name;
  product.category = category ?? product.category;
  product.price = price ?? product.price;
  product.stock = stock ?? product.stock;

  res.status(200).json(product);

});

// ==============================
// DELETE PRODUCT
// ==============================
router.delete("/:id", (req, res) => {

  const id = Number(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  products = products.filter(p => p.id !== id);

  res.status(204).send();

});

module.exports = router;