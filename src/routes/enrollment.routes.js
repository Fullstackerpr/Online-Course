import { Router } from "express";
import { EnrollmentController } from "../controller/enrollment.controller.js";


const controller = new EnrollmentController();
const router = Router();


router
    .post('/', controller.createEnrollment)
    .get('/', controller.getAllEnrollment)
    .get('/:id', controller.getByIdEnrollment)
    .patch('/:id', controller.updateEnrollment)
    .delete('/:id', controller.deleteEnrollment)

export default router;