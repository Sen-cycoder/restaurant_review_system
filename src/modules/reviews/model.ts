import * as Sequelize from 'sequelize';

export interface IReviews extends Sequelize.Model {
  reviewId: number;
  userId: number;
  restaurantId: number;
  review: string;
  rating: number;
}

// export interface ICreateReviewsRequest {
//   name: string;
//   cuisine: string;
//   location: string;
// }

// export interface IReviewsSearchQuery {
//   name?: string;
//   cuisine?: string;
//   location?: string;
// }
