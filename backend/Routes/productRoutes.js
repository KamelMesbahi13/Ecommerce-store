import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controller/ProductsController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
