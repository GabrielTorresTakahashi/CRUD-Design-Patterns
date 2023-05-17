import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(
    "mongodb+srv://gabrielspot1234:Spot2002@freecluster.3q26o85.mongodb.net/",
    {dbName: 'crudjs'}
);

export default connectMongo;
