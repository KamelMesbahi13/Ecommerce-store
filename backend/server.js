import express from "express";
import products from "./Data/Products.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Config/db.js";

dotenv.config();

const port = process.env.PORT || 8000;
connectDb();
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api Is Coming..");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
