import Category from '@/models/Category';
import Product from '@/models/Product';
import User from '@/models/User';
import mongoose from 'mongoose';

const connectMongo = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/crudjs");
    if ((await Category.find()).length == 0) await Category.create({});
    if ((await Product.find()).length == 0) await Product.create({});
    if ((await User.find()).length == 0) await User.create({});
}

export default connectMongo;
