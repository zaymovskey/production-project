import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, EnumButtonTheme } from 'shared/ui/Button/Button';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная')} <Button theme={EnumButtonTheme.CONTOUR}>fdsf</Button><Button>dsaf</Button>
    </div>
  );
};

export default MainPage;
