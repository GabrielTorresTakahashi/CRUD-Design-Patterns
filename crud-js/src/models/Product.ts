import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
});

const Product = models.Product || model('Product', productSchema);

export default Product;