import {classNames} from "helpers/ClassNames/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import React from "react";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  theme?: AppLinkTheme
}

export const AppLink = ({
                          to,
                          className,
                          children,
                          theme = AppLinkTheme.PRIMARY,
                          ...otherProps
                        }: AppLinkProps) => {
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