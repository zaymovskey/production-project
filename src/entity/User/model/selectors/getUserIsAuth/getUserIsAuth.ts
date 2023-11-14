import { type IStateScheme } from 'app/store';

export const getUserIsAuth = (state: IStateScheme): boolean => state.user.isAuth;
