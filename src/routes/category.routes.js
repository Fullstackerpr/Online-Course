import { Router } from "express";
import { CategoryController } from "../controller/category.controller.js";


const controller = new CategoryController();
const router = Router();


router
    .post('/', controller.createCategory)
    .get('/', controller.getAllCategory)
    .get('/:id', controller.getByIdCategory)
    .patch('/:id', controller.updateCategory)
    .delete('/:id', controller.deleteCategory)

export default router;