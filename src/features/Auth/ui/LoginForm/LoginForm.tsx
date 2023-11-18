import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback, memo, type FormEvent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/store/lib/hooks';
import { loginActions } from 'features/Auth';
import { getLoginState } from 'features/Auth/model/selectors/getLoginState/getLoginState';
import { login } from 'features/Auth/model/services/login';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EnumButtonTheme } from 'shared/ui/Button/Button';
import { EnumInputTheme, Input } from 'shared/ui/Input/Input';
import {
  EnumNotificationTheme,
  Notification
} from 'shared/ui/Notification/Notification';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
  onSuccessLogin?: () => void;
}

export const LoginForm = memo(({ className, onSuccessLogin }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [loginServerError, setServerLoginError] = useState<string>();

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

  useEffect(() => {
    setServerLoginError(undefined);
  }, [email, password]);

  const onFormSubmit = async (
    e: FormEvent<EventTarget | HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    void dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        onSuccessLogin?.();
      })
      .catch((err) => {
        setServerLoginError(err);
      });
  };

  return (
    <>
      {loginServerError != null && (
        <Notification theme={EnumNotificationTheme.ERROR} text={loginServerError} />
      )}
      <form
        className={classNames(cls.LoginForm, {}, [className])}
        onSubmit={onFormSubmit}
        noValidate={true}
      >
        <div className={cls.inputs}>
          <Input
            value={email}
            onChange={onChangeEmail}
            placeholder={t('Email')}
            type={'email'}
            theme={EnumInputTheme.BOTTOM_BORDER}
            validationSettings={{ required: true, isEmail: true }}
          />
          <Input
            value={password}
            onChange={onChangePassword}
            placeholder={t('Пароль')}
            type={'password'}
            theme={EnumInputTheme.BOTTOM_BORDER}
          />
        </div>
        <Button type={'submit'} theme={EnumButtonTheme.FILLED} loading={isLoading}>
          {t('Вход')}
        </Button>
      </form>
    </>
  );
});

LoginForm.displayName = 'LoginForm';
