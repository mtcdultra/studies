const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs");

const app = express();

app.use(express.json());

let products = [];
fs.readFile("products.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    products = JSON.parse(data);
  }
});

app.listen(4002, () => console.log("Server running on port 4002"));

app.post("/product", (req, res) => {
  const { name, price } = req.body;
  const product = { name, price, id: randomUUID() };

  products.push(product);
  productFile();
  return res.json(products);
});

app.get("/product", (req, res) => {
  return res.json(products);
});

app.get("/product/:name", (req, res) => {
  const { name } = req.params;
  const product = products.find((product) => product.name === name);
  return res.json(product);
});

app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  productFile();
  return res.json({ message: "Product updated successfully!" });
});

app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((product) => product.id === id);
  products.splice(productIndex, 1);
  productFile();
  return res.json({ message: "Product deleted successfully!" });
});

function productFile() {
  fs.writeFile("products.json", JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Product saved successfully!");
    }
  });
}
