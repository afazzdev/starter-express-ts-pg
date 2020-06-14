import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import v1 from './src/routes/v1';

const app = express();

// Security
app.use(helmet());
app.use(cors());
app.use(express.json());
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 10000,
  message: 'Too many request from this IP. Try again in an hour',
});
app.use('/api', limiter);

// Routes
app.use('/api/v1', v1);
app.all('*', (req, res) => {
  // next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  res.status(400).json({
    status: 'error',
    msg: `Can't find ${req.originalUrl} on this server!`,
  });
});

export default app;
