// v1Router.ts

import { Router } from 'express';
import { authRouter } from './auth'; // Adjust path based on your project structure
import { userRouter } from './user'; // Adjust path based on your project structure
import { resRouter } from './res';
import { reviewRouter } from './reviews';
// Adjust path based on your project structure

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/restaurant', resRouter);
v1Router.use('/review', reviewRouter);
// Mount songRouter under /songs route

export { v1Router };
