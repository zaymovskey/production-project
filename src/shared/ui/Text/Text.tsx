import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum EnumTextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum EnumTextSize {
  S = 'size-s',
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl'
}

export interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: EnumTextTheme;
  size?: EnumTextSize;
}

export const Text: FC<ITextProps> = ({
  className,
  title,
  text,
  theme = EnumTextTheme.PRIMARY,
  size = EnumTextSize.M
}) => {
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[size]])}>
      {title != null && <div className={cls.title}>{title}</div>}
      {text != null && <div className={cls.text}>{text}</div>}
    </div>
  );
};
