import { type Request, type Response } from 'express';
import { type NextFunction } from 'express-serve-static-core';
import { usersDB } from '../../server';
import { ApiError } from '../exceptions/ApiError';
import { UserService } from '../services/UserService';

export function authMiddleware (req: Request, res: Response, next: NextFunction): void {
  try {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader == null) {
      next(ApiError.UnauthorizedError()); return;
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (accessToken.length === 0) {
      next(ApiError.UnauthorizedError()); return;
    }

    const userData = new UserService(usersDB).validateAccessToken(accessToken);
    if (userData == null) {
      next(ApiError.UnauthorizedError());
    }

    next();
  } catch (e) {
    next(ApiError.UnauthorizedError());
  }
}
