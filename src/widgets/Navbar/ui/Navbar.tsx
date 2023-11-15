import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'app/store/lib/hooks';
import { getUserAuthData, LoginModal } from 'features/Auth';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EnumButtonSize, EnumButtonTheme } from 'shared/ui/Button/Button';
import { ConfirmModal } from 'shared/ui/ConfitmModal/ConfirmModal';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [confirmExitModalIsOpen, setConfirmExitModalIsOpen] = useState(false);

  const authData = useAppSelector(getUserAuthData);

  const onCloseLoginModal = (): void => {
    setLoginModalIsOpen(false);
  };

  const onOpenLoginModal = (): void => {
    setLoginModalIsOpen(true);
  };

  const onCloseExitConfirmModal = (): void => {
    setConfirmExitModalIsOpen(false);
  };

  const onOpenExitConfirmModal = (): void => {
    setConfirmExitModalIsOpen(true);
  };

  if (authData != null) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.rightSection}>
          <Button theme={EnumButtonTheme.CONTOUR} onClick={onOpenExitConfirmModal}>
            {t('Выход')}
          </Button>
        </div>
        {confirmExitModalIsOpen && (
          <ConfirmModal
            titleText={t('Выход')}
            bodyText={t('Вы уверены, что хотите выйти?')}
            setShowModal={onCloseExitConfirmModal}
            onConfirmHandler={() => {}}
            onCancelHandler={() => {}}
          />
        )}
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.rightSection}>
        <Button theme={EnumButtonTheme.CONTOUR} onClick={onOpenLoginModal}>
          {t('Вход')}
        </Button>
      </div>
      {loginModalIsOpen && <LoginModal setShowModal={onCloseLoginModal} />}
    </header>
  );
};
