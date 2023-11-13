import { type IStateScheme } from 'app/store';
import { type ILoginScheme } from 'features/Auth';

export const getLoginState = (state: IStateScheme): ILoginScheme => state.login;
