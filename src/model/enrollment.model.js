import { model, Schema } from "mongoose";

const enrollmentSchema = new Schema({
    enrollment_at: {
        type: Date,
        required: true
    },
    course_id: {
        type: Schema.Types.ObjectId,
        ref: "Course",
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {
    timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}
});

enrollmentSchema.virtual('user', {
    ref: 'User',
    localField: 'user_id', 
    foreignField: '_id'
});

enrollmentSchema.virtual('course', {
    ref: 'Course',
    localField: 'course_id', 
    foreignField: '_id'
});


const Enrollment = new model('Enrollment', enrollmentSchema);
export default Enrollment;