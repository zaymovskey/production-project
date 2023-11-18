import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum EnumTextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: EnumTextTheme;
}

export const Text: FC<ITextProps> = ({
  className,
  title,
  text,
  theme = EnumTextTheme.PRIMARY
}) => {
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title != null && <div className={cls.title}>{title}</div>}
      {text != null && <div className={cls.text}>{text}</div>}
    </div>
  );
};
