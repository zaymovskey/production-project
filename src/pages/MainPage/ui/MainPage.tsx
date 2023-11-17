import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

const MainPage: FC = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setModalIsOpen(true);
          setTimeout(() => {
            setModalIsOpen(false);
          }, 2000);
        }}
      >
        Модалка
      </Button>
      {t('Главная')}
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        fdsaf
      </Modal>
    </div>
  );
};

export default MainPage;
