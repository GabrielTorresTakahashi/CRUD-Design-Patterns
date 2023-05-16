import { Schema, model, models } from 'mongoose';



const userSchema = new Schema({
    name: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
})

const User = models.User || model('User', userSchema);

export default User;