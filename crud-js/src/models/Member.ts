import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";


const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    ra: {
        type: String,
        default: null
    },
});

memberSchema.plugin(mongooseAutoPopulate);

const Member = mongoose.models.Member || mongoose.model('Member', memberSchema)

export default Member;