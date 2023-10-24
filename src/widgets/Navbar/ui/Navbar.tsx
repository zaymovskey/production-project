import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('navbar');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
        {t('Главная')}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
        {t('О сайте')}
      </AppLink>
    </div>
  );
};
