import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/store/lib/hooks';
import { getUserAuthData, LoginModal } from 'features/Auth';
import { getLoginState } from 'features/Auth/model/selectors/getLoginState/getLoginState';
import { logout } from 'features/Auth/model/services/logout';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EnumButtonTheme } from 'shared/ui/Button/Button';
import { ConfirmModal } from 'shared/ui/ConfirmModal/ConfirmModal';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(getLoginState);

  const authData = useAppSelector(getUserAuthData);

  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [confirmExitModalIsOpen, setConfirmExitModalIsOpen] = useState(false);

  const onOpenLoginModal = (): void => {
    setLoginModalIsOpen(true);
  };

  const onOpenExitConfirmModal = (): void => {
    setConfirmExitModalIsOpen(true);
  };

  const onConfirm = async (): Promise<void> => {
    await dispatch(logout());
    setConfirmExitModalIsOpen(false);
  };

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

      <LoginModal isOpen={loginModalIsOpen} setIsOpen={setLoginModalIsOpen} />
      <ConfirmModal
        loading={isLoading}
        isOpen={confirmExitModalIsOpen}
        titleText={t('Выход')}
        bodyText={t('Вы уверены, что хотите выйти?')}
        setIsOpen={setConfirmExitModalIsOpen}
        onConfirmHandler={onConfirm}
        onCancelHandler={() => {
          setConfirmExitModalIsOpen(false);
        }}
      />
    </header>
  );
};
