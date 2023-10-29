import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
