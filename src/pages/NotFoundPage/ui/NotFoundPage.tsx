import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('global');

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
      <Loader/>
    </div>
  );
};
