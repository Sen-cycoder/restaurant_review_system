import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { Reviews } from '@modules/reviews/schema';

export const getAllReviews = controller(async (req: Request, res: Response): Promise<void> => {
  const review = await Reviews.findAll();

  res.json(review);
});
