import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import { type FC, type ReactNode } from 'react';

export enum EnumAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  children?: ReactNode;
  className?: string;
  theme?: EnumAppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = ({
  to,
  className,
  children,
  theme = EnumAppLinkTheme.PRIMARY,
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
