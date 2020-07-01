import { Request, Response, NextFunction } from 'express';

interface IController {
  index(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> | Response;
  create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> | Response;
  show(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> | Response;
  update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> | Response;
  delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> | Response;
}

export default IController;
