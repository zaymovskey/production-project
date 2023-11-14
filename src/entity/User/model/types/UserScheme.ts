export interface IUser {
  id: string;
  email: string;
  isActivated: boolean;
}

export interface IUserScheme {
  isAuth: boolean;
  authData?: IUser;
}
