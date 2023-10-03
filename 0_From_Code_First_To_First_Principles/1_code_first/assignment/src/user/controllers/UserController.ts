import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { UserError } from '../errors';

class UserController {
  constructor(private userService: UserService) {}

  async createUser(req: Request, res: Response) {
    const userData = req.body;

    try {
      const user = await this.userService.createUser(userData);

      res.status(201).json({ error: undefined, data: user, success: true });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === UserError.EMAIL_ALREADY_IN_USE || error.message === UserError.USERNAME_ALREADY_TAKEN) {
          res.status(409).json({ error: error.message, data: undefined, success: false });
        } else if (error.message === UserError.VALIDATION_ERROR) {
          res.status(400).json({ error: error.message, data: undefined, success: false });
        } else {
          res.status(500).json({ error: 'InternalError', data: undefined, success: false });
        }
      }
    }
  }

  async editUser(req: Request, res: Response) {
    const { userId } = req.params;

    const userData = req.body;

    try {
      const user = await this.userService.updateUser({ ...userData, id: Number(userId) });

      res.status(201).json({ error: undefined, data: user, success: true });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === UserError.USER_NOT_FOUND) {
          res.status(404).json({ error: error.message, data: undefined, success: false });
        } else if (error.message === UserError.EMAIL_ALREADY_IN_USE || error.message === UserError.USERNAME_ALREADY_TAKEN) {
          res.status(409).json({ error: error.message, data: undefined, success: false });
        } else if (error.message === UserError.VALIDATION_ERROR) {
          res.status(400).json({ error: error.message, data: undefined, success: false });
        } else {
          res.status(500).json({ error: 'InternalError', data: undefined, success: false });
        }
      }
    }
  }
}

export default UserController;
