import mongoose from "@/db/connection";
import { Model } from "mongoose";

interface IProduct{
    name: String,
    price: String,
    description: String
}

const  ProductSchema = new mongoose.Schema<IProduct>({
    name: {type: String, default:null},
    price: {type: String, default:null},
    description: {type: String, default:null}
});

const Product: Model<IProduct> = mongoose.model("Product", ProductSchema);

export default Product;