import { type Response, type Request } from 'express';
import { type NextFunction } from 'express-serve-static-core';
import { type ApiError } from '../exceptions/ApiError';

export function errorMiddleware(
  err: Error & { isCustomHandler?: boolean },
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  console.log(err);
  if (err.isCustomHandler === true) {
    const apiErr = err as ApiError;
    return res
      .status(apiErr.status)
      .json({ message: apiErr.message, errors: apiErr.errors });
  }
  return res.status(500).json({ message: 'Непредвиденная ошибка' });
}
