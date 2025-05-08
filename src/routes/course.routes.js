import { Router } from "express";
import { CourseController } from "../controller/course.controller.js";


const controller = new CourseController();
const router = Router();


router
    .post('/', controller.createCourse)
    .get('/', controller.getAllCourse)
    .get('/:id', controller.getByIdCourse)
    .patch('/:id', controller.updateCourse)
    .delete('/:id', controller.deleteCourse)

export default router;