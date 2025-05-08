import Enrollment from "../model/enrollment.model.js";
import { catchError } from "../utils/error-response.js";
import { successRes } from "../utils/success-response.js";
import { reviewValidation } from "../validation/review.validation.js";


export class ReviewController {
    async createReview(req, res){
        try{
            const {error, value} = reviewValidation(req.body);
            if(error){
                return catchError(res, 400, error);
            }
            const {rating, commet} = value;
            const review = await Review.create({
                rating, commet
            });
            successRes(res, 201, 'success', review);
        } catch(error) {
            catchError(res, 500, error.message);
        }
    }

    async getAllReview(_, res){
        try{
            const reviews = await Review.find();
            successRes(res, 200, 'success', reviews);
        } catch (error) {
            return catchError(res, 500, error.message);
        }
    }

    async getByIdReview(req, res){
        try {
            const id = req.params.id;
            const review = await ReviewController.findById(res, id);
            successRes(res, 200, 'success', review);
        } catch (error){
            return catchError(res, 500, error.message);
        }
    }

    async updateReview(req, res){
        try {
            const id = req.params.id;
            await ReviewController.findById(res, id);
            if (req.body.rating){
                const existRating = await Review.findOne({
                    rating: req.body.rating,
                });
                if(existRating && id != existRating._id){
                    return catchError(res, 409, 'Rating already exists');
                }
            }
            const updateReview = await Review.findByIdAndUpdate(id, {...req.body}, {new: true});
            successRes(res, 200, 'success', updateReview);
        } catch (error) {
            return catchError(res, 500, error.message);
        }
    }

    async deleteReview(req, res){
        try {
            const id = req.params.id;
            await ReviewController.findById(res, id);
            await Review.findByIdAndUpdate(id);
        } catch (error){
            return catchError(res, 500, error.message);
        }
    }

    static async findById(res, id){
        try{
            const review = await Review.findById(id);
            if(!review){
                return catchError(res, 404, `Review id not found: ${id}`);
            }
            return review;
        } catch (error) {
            return catchError(res, 500, error.message);
        }
    }
}