import { Request, Response, NextFunction } from 'express';
import IController from './ControllerInterface';
import knex from '../../knex';

class UserController implements IController {
  async index(req: Request, res: Response, next: NextFunction) {
    const data = await knex.select().table('users');

    return res.json(data);
  }
  create(req: Request, res: Response, next: NextFunction) {
    return knex('users')
      .insert({
        name: 'test',
      })
      .returning('*')
      .then((data) => {
        return res.json(data);
      });
  }
  show(req: Request, res: Response, next: NextFunction) {
    return res.send('This route has not been implemented');
  }
  async update(req: Request, res: Response, next: NextFunction) {
    const update = await knex('users')
      .where({ user_uuid: '967251d5-722a-4e29-b53a-60a0ed39ddad' })
      .update({ name: 'test3', updated_at: knex.raw('NOW()') })
      .returning('*');
    return res.json(update);
  }
  delete(req: Request, res: Response, next: NextFunction) {
    return res.send('This route has not been implemented');
  }
}

export default new UserController();
