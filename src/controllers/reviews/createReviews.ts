// createSongController.ts

import { Request, Response } from 'express';
import { controller } from '@config/controller/controller'; // Adjust import path based on your project structure
import { Reviews } from '@modules/reviews/schema'; // Adjust import path based on your project structure
import { IReviews } from '@modules/reviews/model'; // Adjust import path based on your project structure

/**
 * Controller function to create a new song
 * @param req Request object containing song details in body
 * @param res Response object to send back the created song data or error
 */
export const createReview = controller(async (req: Request, res: Response): Promise<void> => {
  const reviewDetails: IReviews = req.body;

  const newReview = await Reviews.create({
    reviewId: reviewDetails.reviewId,
    userId: reviewDetails.userId,
    restaurantId: reviewDetails.restaurantId,
    review: reviewDetails.review,
    rating: reviewDetails.rating,
  });

  if (!newReview) {
    res.status(500).json({ error: 'Failed to create REVIEW' });
    return;
  }

  res.status(201).json(newReview);
});
