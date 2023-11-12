import * as process from 'process';
import { type Low } from '@commonify/lowdb';
import { type Request, type Response } from 'express';
import { type NextFunction } from 'express-serve-static-core';
import { validationResult } from 'express-validator';
import { type Data } from '../../server';
import { ApiError } from '../exceptions/ApiError';
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
  ): Promise<Response | undefined> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        next(ApiError.BadRequest('Ошибка валидации', errors.array())); return;
      }
      const { email, password }: { email: string; password: string } = req.body;
      const userData = await this.userService.registration(email, password);
      const maxAge = 30 * 24 * 60 * 60 * 1000;
      res.cookie('refreshToken', userData.refreshToken, { maxAge, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  };

  public async login (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        next(ApiError.BadRequest('Ошибка валидации', errors.array())); return;
      }
      const { email, password }: { email: string; password: string } = req.body;
      const userData = await this.userService.login(email, password);
      const maxAge = 30 * 24 * 60 * 60 * 1000;
      res.cookie('refreshToken', userData.refreshToken, { maxAge, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  };

  public async logout (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { refreshToken } = req.cookies;
      await this.userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.status(200).json({ message: 'Пользователь успешно разлогинен' });
    } catch (e) {
      next(e);
    }
  };

  public async activate (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const activationLink = req.params.link;
      await this.userService.active(activationLink);
      res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      console.log(e);
    }
  };

  public async refresh (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const { refreshToken } = req.cookies;
    const userData = await this.userService.refresh(refreshToken);
    const maxAge = 30 * 24 * 60 * 60 * 1000;
    res.cookie('refreshToken', userData.refreshToken, { maxAge, httpOnly: true });
    return res.json(userData);
  };

  public async getUsers (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const users = this.usersDB.data?.users;
    return res.json(users);
  };
}
