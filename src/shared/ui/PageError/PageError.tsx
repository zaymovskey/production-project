import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface IPageErrorProps {
  className?: string;
}

export const PageError: FC = ({ className }: IPageErrorProps) => {
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
