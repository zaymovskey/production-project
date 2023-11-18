import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
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
  loading?: boolean;
}

export const ConfirmModal: FC<IConfirmModalProps> = ({
  className,
  titleText,
  bodyText,
  confirmText,
  cancelText,
  onConfirmHandler,
  onCancelHandler,
  ...modalProps
}) => {
  const { t } = useTranslation();

  return (
    <Modal {...modalProps}>
      <div className={classNames(cls.ConfirmModal, {}, [className])}>
        <div className={cls.title}>{titleText}</div>
        <div className={cls.body}>{bodyText}</div>
        <div className={cls.buttons}>
          <Button onClick={onConfirmHandler}>{confirmText ?? t('Да')}</Button>
          <Button onClick={onCancelHandler}>{cancelText ?? t('Нет')}</Button>
        </div>
      </div>
    </Modal>
  );
};
