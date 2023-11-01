import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';

export enum EnumButtonTheme {
  FILLED = 'filled',
  CONTOUR = 'contour',
}

export enum EnumButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EnumButtonTheme;
  size?: EnumButtonSize;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme = EnumButtonTheme.FILLED,
  size = EnumButtonSize.M,
  ...otherProps
}) => {
  const additional: string[] = [cls[theme], cls[size]];

  return (
    <button
      className={classNames(cls.Button, {}, [className, ...additional])}
      {...otherProps}
    >
      {children}
    </button>);
};
