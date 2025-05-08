import Joi from "joi";

export const enrollmentValidator = (data) => {
    const enrollment = Joi.object({
        enrollment_at: Joi.date().required(),
        course_id: Joi.string(),
        user_id: Joi.string()
    });
    return enrollment.validate(data);
}