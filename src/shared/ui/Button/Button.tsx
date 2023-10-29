import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import React, { type ButtonHTMLAttributes, type FC } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<IButtonProps> = ({ className, children, ...otherProps }) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>);
};
