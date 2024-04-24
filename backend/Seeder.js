import { dotenv } from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import users from "./Data/users.js";
import Products from "./Data/Products.js";
import User from "./Models/UserModel.js";
import Product from "./Models/ProductModel.js";
import Order from "./Models/OrderModel.js";
import connectDb from "./Config/db.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
  } catch (error) {}
};
