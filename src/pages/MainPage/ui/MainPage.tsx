import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, EnumButtonSize } from 'shared/ui/Button/Button';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная')}
      <div>
        <Button size={EnumButtonSize.S}>....</Button>
        <Button size={EnumButtonSize.M}>....</Button>
        <Button size={EnumButtonSize.L}>....</Button>
        <Button size={EnumButtonSize.XL}>....</Button>
      </div>
    </div>
  );
};

export default MainPage;
