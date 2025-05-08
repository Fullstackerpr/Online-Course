import { Router } from "express";
import { ReviewController } from "../controller/review.controller.js";


const router = Router();
const controller = new ReviewController();


router
    .post('/', controller.createReview)
    .get('/', controller.getAllReview)
    .get('/', controller.getByIdReview)
    .patch('/', controller.updateReview)
    .delete('/', controller.deleteReview)


export default router;