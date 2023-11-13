import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/Auth/ui/LoginModal/LoginModal';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EnumButtonSize, EnumButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  const onCloseModal = (): void => {
    setLoginModalIsOpen(false);
  };

  const onOpenModal = (): void => {
    setLoginModalIsOpen(true);
  };

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.rightSection}>
        <Button
          size={EnumButtonSize.S}
          theme={EnumButtonTheme.CONTOUR}
          onClick={onOpenModal}
        >
          {t('Войти')}
        </Button>
      </div>
      {loginModalIsOpen && <LoginModal setShowModal={onCloseModal} />}
    </div>
  );
};
