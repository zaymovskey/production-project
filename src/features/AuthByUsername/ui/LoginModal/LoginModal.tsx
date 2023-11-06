import { type FC } from 'react';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames/classNames';
import { type IModalProps, Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';

interface ILoginModalProps extends IModalProps {
  className?: string;
}

export const LoginModal: FC<ILoginModalProps> = ({ className, ...modalProps }) => {
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      {...modalProps}
    >
      <LoginForm/>
    </Modal>
  );
};
