import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { Restaurant } from '@modules/res/schema';

export const getallres = controller(async (req: Request, res: Response): Promise<void> => {
  const rest = await Restaurant.findAll();

  res.json(rest);
});
