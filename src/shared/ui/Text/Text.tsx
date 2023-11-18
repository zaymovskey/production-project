import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
}

export const Text: FC<ITextProps> = ({ className, title, text }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Text, {}, [className])}>
      {title != null && <div className={cls.title}>{title}</div>}
      {text != null && <div className={cls.text}>{text}</div>}
    </div>
  );
};
