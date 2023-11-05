import { Counter } from 'entity/Counter';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('О сайте')}
      <Counter />
    </div>);
};

export default AboutPage;
