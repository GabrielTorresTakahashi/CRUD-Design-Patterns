import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(
    "mongodb+srv://dbuser:123abc123@freecluster.3q26o85.mongodb.net/",
    {dbName: 'crudjs'}
);

export default connectMongo;
