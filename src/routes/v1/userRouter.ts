import { Router } from 'express';
import userController from '../../controllers/v1/userController';

const userRoutes = Router();

userRoutes.get('/check', userController.check);

export default userRoutes;
