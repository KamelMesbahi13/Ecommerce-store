import express from "express";
import products from "./Data/Products.js";

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Api Is Coming..");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
