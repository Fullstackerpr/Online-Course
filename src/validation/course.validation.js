import Joi from "joi";

export const courseValidator = (data) => {
    const course = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.string().required(),
        author: Joi.string().required()
    });
    return course.validate(data);
}