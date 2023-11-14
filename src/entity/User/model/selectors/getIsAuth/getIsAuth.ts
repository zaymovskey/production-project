import { type IStateScheme } from 'app/store';

export const getIsAuth = (state: IStateScheme): boolean => state.user.isAuth;
