import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div>{t('Главная')} <Button>fdsf</Button></div>
  );
};

export default MainPage;
