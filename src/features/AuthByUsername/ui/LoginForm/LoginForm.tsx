import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EnumButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={cls.title}>
        <h2>{t('Войти')}</h2>
      </div>
      <div className={cls.inputs}>
        <Input placeholder={t('Логин')} type={'text'}/>
        <Input placeholder={t('Пароль')} type={'password'}/>
      </div>
      <Button
        theme={EnumButtonTheme.FILLED}
      >{t('Войти')}</Button>
    </div>
  );
};
