import { type IUserScheme } from 'entity/User';
import { type ILoginScheme } from 'features/Auth';

export interface IStateScheme {
  user: IUserScheme;
  login: ILoginScheme;
}
