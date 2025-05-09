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
    timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}
});

reviewSchema.virtual('user', {
    ref: 'User',
    localField: 'user_id', 
    foreignField: '_id'
});

reviewSchema.virtual('course', {
    ref: 'Course',
    localField: 'course_id', 
    foreignField: '_id'
});


const Review = model('Review', reviewSchema);
export default Review;