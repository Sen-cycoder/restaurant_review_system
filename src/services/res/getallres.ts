import { Restaurant } from '@modules/res/schema';
import { IRestaurant } from '@modules/res/model';
export const getallres = async (): Promise<IRestaurant[]> => {
  const rest = await Restaurant.findAll({ raw: true });
  return rest;
};
