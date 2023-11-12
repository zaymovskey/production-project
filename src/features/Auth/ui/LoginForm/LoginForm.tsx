import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EnumButtonTheme } from 'shared/ui/Button/Button';
import { EnumInputTheme, Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={cls.inputs}>
        <Input
          value={login}
          onChange={setLogin}
          placeholder={t('Email')}
          type={'email'}
          theme={EnumInputTheme.BOTTOM_BORDER}
        />
        <Input
          value={password}
          onChange={setPassword}
          placeholder={t('Пароль')}
          type={'password'}
          theme={EnumInputTheme.BOTTOM_BORDER}
        />
      </div>
      <Button theme={EnumButtonTheme.FILLED}>{t('Войти')}</Button>
    </div>
  );
};
