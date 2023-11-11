import { type Low } from '@commonify/lowdb';
import { type Request, type Response } from 'express';
import { type NextFunction } from 'express-serve-static-core';
import { type Data } from '../../server';
import { UserService } from '../services/UserService';

export class UserController {
  usersDB: Low<Data>;
  userService: UserService;

  constructor (usersDB: Low<Data>) {
    this.usersDB = usersDB;
    this.userService = new UserService(usersDB);
  }

  public async registration (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email, password }: { email: string; password: string } = req.body;
      const userData = await this.userService.registration(email, password);
      const maxAge = 30 * 24 * 60 * 60 * 1000;
      res.cookie('refreshToken', userData.refreshToken, { maxAge, httpOnly: true });
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  };

  public async login (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
  };

  public async logout (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
  };

  public async activate (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
  };

  public async refresh (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
  };

  public async getUsers (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json([1, 2, 3]);
  };
}
