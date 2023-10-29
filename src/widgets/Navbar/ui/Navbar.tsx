import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, EnumAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink theme={EnumAppLinkTheme.SECONDARY} to={RoutePath.main}>
        {t('Главная')}
      </AppLink>
      <AppLink theme={EnumAppLinkTheme.SECONDARY} to={RoutePath.about}>
        {t('О сайте')}
      </AppLink>
    </div>
  );
};
