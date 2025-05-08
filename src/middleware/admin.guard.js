import { catchError } from "../utils/error-response.js";

export const AdminGuard = (req, res, next) => {
    try {
        const admin = req?.user;
        if(admin.role === 'superadmin' || admin.role === 'admin'){
            return next();
        } else {
            return catchError(res, 403, 'Forbiddin admin');
        }
    } catch (error) {
        return catchError(res, 500, error.message);
    }
}