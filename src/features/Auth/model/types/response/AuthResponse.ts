import { type IUser } from 'entity/User';

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
