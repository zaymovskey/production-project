import { type ICounterScheme } from 'entity/Counter';
import { type IUserScheme } from 'entity/User';

export interface IStateScheme {
  counter: ICounterScheme;
  user: IUserScheme;
}
