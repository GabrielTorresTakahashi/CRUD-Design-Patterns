import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";


const orderSchema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        autopopulate: true,
        default: null,
    }],
    customer_name: {
        type: String,
        default: null,
    },
});

orderSchema.plugin(mongooseAutoPopulate);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order;