import express, { Application } from 'express';
import BaseRouter from './BaseRouter';
import UserRouter from './UserRouter';

class AppV1 {
  app: Application;
  constructor() {
    this.app = express();
    this.routes();
  }

  public routes() {
    this.app.use('/users', UserRouter);
  }
}

export default new AppV1().app;
