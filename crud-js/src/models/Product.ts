import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
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
        type: Schema.Types.ObjectId,
        default: null,
    },
});

const Product = models.Product || model('Product', productSchema);

export default Product;