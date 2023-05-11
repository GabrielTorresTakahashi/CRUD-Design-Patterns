import "dotenv/config";
import mongoose from "mongoose";

const dbName = "crudjs"

mongoose.set("strictQuery", true);

mongoose
    .connect(
        `mongodb+srv://gabrielspot1234:<password>@freecluster.3q26o85.mongodb.net/?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log(`☁️ Banco de dados conectado -> ${dbName}`);
    })
    .catch((error) => {
        console.log("Could not connect", error);
    });

export default mongoose;
