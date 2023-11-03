import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};

export default NotFoundPage;
