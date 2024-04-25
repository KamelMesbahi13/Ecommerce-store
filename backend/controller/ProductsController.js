import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../Models/ProductModel.js";

// DESCRIPTION:  Fetch All Products
// ROUTE:   GET /api/products
// ACCESS:   Public

const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// DESCRIPTION:  Fetch Product By Id
// ROUTE:   GET /api/product/:id
// ACCESS:   Public

const getProductById = asyncHandler(async (req, res) => {
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
});

export { getProducts, getProductById };
