export class ApiError extends Error {
  status;
  errors;
  isCustomHandler = true;

  constructor (status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError (): ApiError {
    return new ApiError(401, 'Пользователь не авторизован');
  };

  static BadRequest (message: string, errors = []): ApiError {
    return new ApiError(401, message, errors);
  };
}
