import * as Sequelize from 'sequelize';
import { IRestaurant } from './model';
import { sequelize } from '../../config/database/sql';
export const Restaurant = sequelize.define<IRestaurant>('IRestaurant', {
  restaurantId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cuisine: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
});
