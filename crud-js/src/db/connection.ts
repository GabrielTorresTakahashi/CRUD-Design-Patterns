import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(
    // "mongodb+srv://gabrielspot1234:Spot2002@freecluster.3q26o85.mongodb.net/",
    "mongodb://127.0.0.1:27017/crudjs"
);

export default connectMongo;
