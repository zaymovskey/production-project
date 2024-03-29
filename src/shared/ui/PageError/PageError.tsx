import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError: FC<IPageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('Произошла ошибка')}
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
