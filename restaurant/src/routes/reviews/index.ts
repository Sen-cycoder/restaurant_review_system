import { Router } from 'express';
import { reviewscontroller } from '@controllers/index';

const reviewRouter = Router();

reviewRouter.get('/', reviewscontroller.getAllReviews);

export { reviewRouter };
