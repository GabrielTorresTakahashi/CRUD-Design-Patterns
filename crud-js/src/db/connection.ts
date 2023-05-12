import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(
    "mongodb://127.0.0.1:27017/crudjs",
    {dbName: 'crudjs'}
);

export default connectMongo;
