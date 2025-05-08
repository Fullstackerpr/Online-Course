import { catchError } from "../utils/error-response.js";


export const SuperAdminGuard = (req, res, next) => {
    try {
        const superadmin = req?.user;
        if(superadmin.role === 'superadmin'){
            return next();
        } else {
            return catchError(res, 403, 'Forbiddin superadmin');
        }
    } catch (error){
        return catchError(res, 500, error.message);
    }
}