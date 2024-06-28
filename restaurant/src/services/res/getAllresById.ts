import { Restaurant } from '@modules/res/schema';
import { IRestaurant } from '@modules/res/model';

export const getRestaurantsById = async (id: string): Promise<IRestaurant | null> => {
  const condition = {
    restaurantId: id,
  };
  const whereCond = { where: condition, raw: true };
  const resDetails = await Restaurant.findOne(whereCond);
  return resDetails;
};
