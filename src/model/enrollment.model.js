import { date, required, types } from "joi";
import { model, Schema } from "mongoose";

const enrollmentSchema = new Schema({
    enrollment_at: {
        type: date,
        required: true
    },
    course_id: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

const Enrollment = new model('Enrollment', enrollmentSchema);
export default Enrollment;