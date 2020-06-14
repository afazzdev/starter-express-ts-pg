import express from 'express';
import userRoutes from './userRouter';

const app = express();

app.use('/users', userRoutes);

export default app;
