import { dotenv } from "dotenv";
import mongoose from "mongoose";
import users from "./Data/users.js";
import Products from "./Data/Products.js";
import User from "./Models/UserModel.js";
import Product from "./Models/ProductModel.js";
import Order from "./Models/OrderModel.js";
import connectDb from "./Config/db.js";

dotenv.config();

connectDb();
