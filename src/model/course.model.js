import { model, Schema } from "mongoose";


const courseSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

}, {
    timestamps: true
});

const Course = model('Course', courseSchema);
export default Course;