import { Reviews } from '@modules/reviews/schema';
import { IReviews } from '@modules/reviews/model';
export const getAllReviews = async (): Promise<IReviews[]> => {
  const review = await Reviews.findAll({ raw: true });
  return review;
};
