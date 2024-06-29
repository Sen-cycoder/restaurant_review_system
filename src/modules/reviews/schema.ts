import * as Sequelize from 'sequelize';
import { IReviews } from './model';
import { sequelize } from '../../config/database/sql';
export const Reviews = sequelize.define<IReviews>(
  'IReviews',
  {
    reviewId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    restaurantId: {
      type: Sequelize.INTEGER,
    },
    review: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  },
);
