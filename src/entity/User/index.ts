import { getUserIsAuth } from 'entity/User/model/selectors/getUserIsAuth/getUserIsAuth';
import { userReducer, userActions } from 'entity/User/model/slice/userSlice';
import { type IUser, type IUserScheme } from 'entity/User/model/types/UserScheme';

export { userReducer, userActions, type IUserScheme, type IUser, getUserIsAuth };
