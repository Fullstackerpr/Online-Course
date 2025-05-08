import { catchError } from "../utils/error-response.js";

export const SelfGuard = (req, res, next) => {
    try {
        const user = req?.user;
        if(user.role === 'user' ||  user.id === req.params?.id){
            return next();
        } else {
            return catchError(res, 403, 'Forbiddin user');
        }
    } catch (error) {
        return catchError(res, 500, error.message);
    };
};