import * as Sequelize from 'sequelize';

export interface IRestaurant extends Sequelize.Model {
  restaurantId: number;
  name: string;
  cuisine: string;
  location: string;
  createdAt: string;
}

export interface ICreateRestaurantRequest {
  name: string;
  cuisine: string;
  location: string;
}

export interface IRestaurantSearchQuery {
  name?: string;
  cuisine?: string;
  location?: string;
}
