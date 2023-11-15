import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { type IModalProps, Modal } from 'shared/ui/Modal/Modal';
import cls from './ConfirmModal.module.scss';

interface IConfirmModalProps extends IModalProps {
  className?: string;
  titleText?: string;
  bodyText?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirmHandler: () => void;
  onCancelHandler: () => void;
}

export const ConfirmModal: FC<IConfirmModalProps> = ({
  className,
  titleText,
  bodyText,
  confirmText = 'Да',
  cancelText = 'Нет',
  onConfirmHandler,
  onCancelHandler,
  ...modalProps
}) => {
  return (
    <Modal className={classNames(cls.ConfirmModal, {}, [className])} {...modalProps}>
      <div>{titleText}</div>
      <div>{bodyText}</div>
      <div>
        <Button onClick={onConfirmHandler}>{confirmText}</Button>
        <Button onClick={onCancelHandler}>{cancelText}</Button>
      </div>
    </Modal>
  );
};
