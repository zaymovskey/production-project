import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, EnumButtonSize } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  const [open, setOpen] = useState(false);

  return (
    <div>
      {t('Главная')}
      <div>
        <Button
          size={EnumButtonSize.S}
          onClick={() => { setOpen(true); }}>....</Button>
      </div>
      { open &&
        <Modal
          setShowModal={setOpen}
        >
          ....
        </Modal>
      }
      {/* <Modal isOpen={open} setIsOpen={setIsOpen}>....</Modal> */}
    </div>
  );
};

export default MainPage;
