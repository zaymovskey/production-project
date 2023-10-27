import React, { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  useEffect(() => {
    throw new Error();
  }, []);

  const { t } = useTranslation('main');

  return <div>{t('Главная')}</div>;
};

export default MainPage;
