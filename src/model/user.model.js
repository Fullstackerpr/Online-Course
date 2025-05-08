import {model, Schema} from 'mongoose';


const userSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'superadmin', 'author'],
        default: 'user',
        required: true
    },
}, {
    timestamps: true
});

const User = model('User', userSchema);
export default User;