import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'sfasdf/Counter';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('О сайте')}
      <Counter />
    </div>);
};

export default AboutPage;
