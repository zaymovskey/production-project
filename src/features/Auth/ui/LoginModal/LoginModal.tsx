import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginForm } from 'features/Auth/ui/LoginForm/LoginForm';
import { RegistrationForm } from 'features/Auth/ui/RegistrationForm/RegistrationForm';
import AccountIcon from 'shared/assets/icons/account.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { type IModalProps, Modal } from 'shared/ui/Modal/Modal';
import { type ITab, Tabs } from 'shared/ui/Tabs/Tabs';
import cls from './LoginModal.module.scss';

interface ILoginModalProps extends IModalProps {
  className?: string;
}

export const LoginModal: FC<ILoginModalProps> = ({ className, ...modalProps }) => {
  const { t } = useTranslation();

  const tabs: ITab[] = [
    {
      id: 1,
      title: t('Войти')
    },
    {
      id: 2,
      title: t('Зарегистрироваться')
    }
  ];

  const [selectedTabId, setSelectedTabId] = useState<number>(tabs[0].id);

  const changeTabHandler = (tabId: number): void => {
    setSelectedTabId(tabId);
  };

  return (
    <Modal className={classNames(cls.LoginModal, {}, [className])} {...modalProps}>
      <Tabs selectedId={selectedTabId} tabs={tabs} onClick={changeTabHandler} />
      <div className={cls.form}>
        <div className={cls.accountIcon}>
          <AccountIcon />
        </div>
        {selectedTabId === 1 && <LoginForm />}
        {selectedTabId === 2 && <RegistrationForm />}
      </div>
    </Modal>
  );
};
