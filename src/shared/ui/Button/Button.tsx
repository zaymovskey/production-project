import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum EnumButtonTheme {
  FILLED = 'filled',
  CONTOUR = 'contour',
}

export enum EnumButtonSize {
  S = 'size-s',
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl'
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
  ...defaultButtonProps
}) => {
  const additional: string[] = [cls[theme], cls[size]];

  return (
    <button
      className={classNames(cls.Button, {}, [className, ...additional])}
      {...defaultButtonProps}
    >
      {children}
    </button>);
};
