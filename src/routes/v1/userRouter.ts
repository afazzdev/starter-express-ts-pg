import userController from '../../controllers/v1/UserController';
import BaseRouter from './BaseRouter';

class UserRoutes extends BaseRouter {
  public routes(): void {
    this.router.get('/', userController.index);
    this.router.post('/', userController.create);
    this.router.patch('/', userController.update);
  }
}

export default new UserRoutes().router;
