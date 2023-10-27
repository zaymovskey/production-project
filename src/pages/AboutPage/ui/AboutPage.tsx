import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {/* {t('О сайте')} */}
      <Button>Клик</Button>
    </div>);
};

export default AboutPage;
