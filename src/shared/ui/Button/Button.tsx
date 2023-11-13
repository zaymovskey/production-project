import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './Button.module.scss';

export enum EnumButtonTheme {
  FILLED = 'filled',
  CONTOUR = 'contour'
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
  loading?: boolean;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme = EnumButtonTheme.FILLED,
  size = EnumButtonSize.M,
  loading = false,
  ...defaultButtonProps
}) => {
  const mods: Record<string, boolean> = {
    [cls.loading]: loading
  };
  const additional: string[] = [cls[theme], cls[size]];

  return (
    <button
      className={classNames(cls.Button, mods, [className, ...additional])}
      {...defaultButtonProps}
    >
      <div className={cls.children}>{children}</div>
      <Loader className={cls.loader} />
    </button>
  );
};
