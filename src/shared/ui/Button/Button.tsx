import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import React, { type ButtonHTMLAttributes, type FC } from 'react';

export enum EnumButtonTheme {
  FILLED = 'filled',
  CONTOUR = 'contour',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EnumButtonTheme;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme = EnumButtonTheme.FILLED,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>);
};
