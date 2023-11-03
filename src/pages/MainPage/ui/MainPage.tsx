import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, EnumButtonSize } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  const [open, setIsOpen] = useState(false);

  return (
    <div>
      {t('Главная')}
      <div>
        <Button size={EnumButtonSize.S} onClick={() => { setIsOpen(true); }}>....</Button>
      </div>
      <Modal isOpen={open} setIsOpen={setIsOpen}>....</Modal>
    </div>
  );
};

export default MainPage;
