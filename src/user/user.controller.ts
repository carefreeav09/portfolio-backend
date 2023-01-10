import Express from 'express';
import User from './index';

import { IUser } from './user.model';

class UserController {
  async getAllUsers(
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) {
    try {
      const users: IUser[] = await User.getAllUsers();
      res.status(200).json(users);
    }
    catch (err) {
      next(err);
    }
  }

  async findUserById(
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) {
    try {
      const user: IUser | null = await User.findUserById(
        Number(req.params.id)
      );
      res.status(200).json(user);
    }
    catch (err) {
      next(err);
    }
  }

  async createUser(
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) {
    try {

      const { username } = req.body;

      const returningUser = await User.findUserByUsername(username);

      if (returningUser) {
        const error: any = new Error('Username is already in use.');
        error.code = 400;
        throw error;
      }
      else {
        const user: IUser = await User.createUser(req.body);
        res.status(201).json(user);
      }
    }
    catch (err) {
      next(err);
    }
  }

};

export default UserController;