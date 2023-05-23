import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    price: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        autopopulate: true,
        default: null,
    },
});

productSchema.plugin(require('mongoose-autopopulate'));

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;