import { IRouter, Router } from 'express';
import BaseRouterInterface from './RouterInterface';

abstract class BaseRouter implements BaseRouterInterface {
  public router: IRouter;
  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRouter;
