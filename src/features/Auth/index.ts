import { getUserAuthData } from 'entity/User/model/selectors/getUserAuthData/getUserAuthData';
import {
  loginActions,
  loginSlice,
  loginReducer
} from 'features/Auth/model/slice/loginSlice';
import { type ILoginScheme } from 'features/Auth/model/types/LoginScheme';
import { LoginForm } from 'features/Auth/ui/LoginForm/LoginForm';
import { LoginModal } from 'features/Auth/ui/LoginModal/LoginModal';
import { RegistrationForm } from './ui/RegistrationForm/RegistrationForm';

export {
  LoginModal,
  type ILoginScheme,
  RegistrationForm,
  LoginForm,
  loginSlice,
  loginActions,
  getUserAuthData,
  loginReducer
};
