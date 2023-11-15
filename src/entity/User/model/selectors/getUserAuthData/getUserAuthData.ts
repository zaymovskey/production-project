import { type IUserScheme } from 'entity/User';
import { type IStateScheme } from 'app/store';

export const getUserAuthData = (state: IStateScheme): IUserScheme['authData'] =>
  state.user.authData;
