import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/store/lib/hooks';
import { loginActions } from 'features/Auth';
import { getLoginState } from 'features/Auth/model/selectors/getLoginState/getLoginState';
import { login } from 'features/Auth/model/services/login';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EnumButtonTheme } from 'shared/ui/Button/Button';
import { EnumInputTheme, Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { email, password, isLoading } = useAppSelector(getLoginState);

  const onChangeEmail = useCallback(
    (email: string) => {
      dispatch(loginActions.setEmail(email));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    void dispatch(login({ email, password }));
  }, [dispatch, email, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={cls.inputs}>
        <Input
          value={email}
          onChange={onChangeEmail}
          placeholder={t('Email')}
          type={'email'}
          theme={EnumInputTheme.BOTTOM_BORDER}
        />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder={t('Пароль')}
          type={'password'}
          theme={EnumInputTheme.BOTTOM_BORDER}
        />
      </div>
      <Button onClick={onLoginClick} theme={EnumButtonTheme.FILLED} loading={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';
