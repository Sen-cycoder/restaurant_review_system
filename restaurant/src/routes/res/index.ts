import { Router } from 'express';
import { resController1 } from '@controllers/index';

const resRouter = Router();

resRouter.get('/all', resController1.getallres);

resRouter.get('/:id', resController1.getRestaurantById);

export { resRouter };
