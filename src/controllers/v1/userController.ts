import { Request, Response } from 'express';

export const check = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    msg: 'connected',
  });
};

const userController = {
  check,
};

export default userController;
