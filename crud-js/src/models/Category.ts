import { Schema, model, models } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
});

const Category = models.Category || model('Category', categorySchema);

export default Category;