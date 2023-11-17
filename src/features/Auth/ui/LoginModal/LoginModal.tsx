import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RegistrationForm, LoginForm } from 'features/Auth';
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
      title: t('Вход')
    },
    {
      id: 2,
      title: t('Регистрация')
    }
  ];

  const [selectedTabId, setSelectedTabId] = useState<number>(tabs[0].id);

  const changeTabHandler = (tabId: number): void => {
    setSelectedTabId(tabId);
  };

  const onSuccessLogin = (): void => {
    modalProps.setIsOpen(false);
  };

  return (
    <Modal className={classNames(cls.LoginModal, {}, [className])} {...modalProps}>
      <Tabs selectedId={selectedTabId} tabs={tabs} onClick={changeTabHandler} />
      <div className={cls.form}>
        <div className={cls.accountIcon}>
          <AccountIcon />
        </div>
        {selectedTabId === 1 && <LoginForm onSuccessLogin={onSuccessLogin} />}
        {selectedTabId === 2 && <RegistrationForm />}
      </div>
    </Modal>
  );
};
