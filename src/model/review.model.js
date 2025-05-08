import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
    rating: {
        type: String,
        required: true,
        enum: ['very_bad', 'bad', 'average', 'good', 'excellent']
    },
    commet: {
        type: String, 
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    course_id: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
}, {
    timestamps: true
});

const Review = model('Review', reviewSchema);
export default Review;