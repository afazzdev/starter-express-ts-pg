import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import v1 from './routes/v1';

class App {
  app: Application;

  constructor() {
    dotenv.config();
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    const limiter = rateLimit({
      max: 100,
      windowMs: 60 * 60 * 10000,
      message: 'Too many request from this IP. Try again in an hour',
    });
    this.app.use('/api', limiter);
  }

  routes() {
    this.app.use('/api/v1', v1);
    this.app.all('*', (req, res) => {
      // next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
      res.status(400).json({
        status: 'error',
        msg: `Can't find ${req.originalUrl} on this server!`,
      });
    });
  }
}

export default new App().app;
