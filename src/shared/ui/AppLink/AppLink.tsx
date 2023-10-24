import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import React, { type FC } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
