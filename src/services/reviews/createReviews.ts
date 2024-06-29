// createSong.ts

import { Reviews } from '@modules/reviews/schema'; // Adjust import path based on your project structure
import { IReviews } from '@modules/reviews/model'; // Adjust import path based on your project structure

/**
 * Service function to create a new song
 * @param reviewDetails Object containing song details to be created
 * @returns Promise resolving to the created song object
 */
export const createReview = async (reviewDetails: IReviews): Promise<IReviews> => {
  const newReview: IReviews = await Reviews.create({
    reviewId: reviewDetails.reviewId,
    userId: reviewDetails.userId,
    restaurantId: reviewDetails.restaurantId,
    review: reviewDetails.review,
    rating: reviewDetails.rating,
  });

  return newReview;
};
