import { type FC, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/store/lib/hooks';
import { getUserAuthData, LoginModal } from 'features/Auth';
import { logout } from 'features/Auth/model/services/logout';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EnumButtonTheme } from 'shared/ui/Button/Button';
import { ConfirmModal } from 'shared/ui/ConfirmModal/ConfirmModal';
import { useModal } from 'shared/ui/Modal/useModal';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [confirmExitModalIsOpen, setConfirmExitModalIsOpen, closeConfirmExitModal] =
    useModal();

  const authData = useAppSelector(getUserAuthData);

  const onOpenLoginModal = (): void => {
    setLoginModalIsOpen(true);
  };

  const onOpenExitConfirmModal = (): void => {
    setConfirmExitModalIsOpen(true);
  };

  const onConfirm = async (): Promise<void> => {
    await dispatch(logout());
    closeConfirmExitModal.current();
  };

  const onSuccessLogin = useCallback(() => {
    console.log('huy');
    closeConfirmExitModal.current();
  }, [closeConfirmExitModal]);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.rightSection}>
        {authData != null ? (
          <Button theme={EnumButtonTheme.CONTOUR} onClick={onOpenExitConfirmModal}>
            {t('Выход')}
          </Button>
        ) : (
          <Button theme={EnumButtonTheme.CONTOUR} onClick={onOpenLoginModal}>
            {t('Вход')}
          </Button>
        )}
      </div>

      {loginModalIsOpen && (
        <LoginModal
          onSuccessLogin={onSuccessLogin}
          setShowModal={setLoginModalIsOpen}
        />
      )}
      {confirmExitModalIsOpen && (
        <ConfirmModal
          titleText={t('Выход')}
          bodyText={t('Вы уверены, что хотите выйти?')}
          setShowModal={setConfirmExitModalIsOpen}
          onConfirmHandler={onConfirm}
          onCancelHandler={() => {
            closeConfirmExitModal.current();
          }}
          closeModalRef={closeConfirmExitModal}
        />
      )}
    </header>
  );
};
