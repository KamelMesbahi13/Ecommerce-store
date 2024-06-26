import express from "express";
import productRoutes from "./Routes/productRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 8000;
connectDb();
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api Is Coming..");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
