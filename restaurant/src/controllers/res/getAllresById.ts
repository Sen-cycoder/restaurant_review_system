import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { Restaurant } from '@modules/res/schema'; // Adjust the import path based on your project structure
// Adjust the import path based on your project structure

/**
 * Handler function to get a song by ID
 * @param req Request object containing song ID in params
 * @param res Response object to send back the song data or error
 */
export const getRestaurantById = controller(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const rest = await Restaurant.findByPk(id);

  if (!rest) {
    res.status(404).json({ error: 'Restaurant not found' });
    return;
  }

  res.json(rest);
});
