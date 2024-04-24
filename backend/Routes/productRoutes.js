import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../Models/ProductModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);

      if (product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error("Resources Not Found");
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  })
);

export default router;
