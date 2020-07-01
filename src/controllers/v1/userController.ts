import { Request, Response, NextFunction } from 'express';
import IController from './ControllerInterface';
import knex from '../../knex';

class UserController implements IController {
  index(req: Request, res: Response, next: NextFunction) {
    return res.send('This route has not been implemented');
  }
  create(req: Request, res: Response, next: NextFunction) {
    return knex('users')
      .insert({
        name: 'test',
      })
      .then((data) => {
        return res.json(data);
      });
  }
  show(req: Request, res: Response, next: NextFunction) {
    return res.send('This route has not been implemented');
  }
  update(req: Request, res: Response, next: NextFunction) {
    return res.send('This route has not been implemented');
  }
  delete(req: Request, res: Response, next: NextFunction) {
    return res.send('This route has not been implemented');
  }
}

export default new UserController();
