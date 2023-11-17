import { type FC, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { WarningIcon, ErrorCloseIcon } from 'shared/assets/icons';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Notification.module.scss';

export enum EnumNotificationTheme {
  WARNING = 'warning',
  ERROR = 'error'
}

const icons: Record<EnumNotificationTheme, ReactNode> = {
  warning: <WarningIcon />,
  error: <ErrorCloseIcon />
};

interface INotificationProps {
  className?: string;
  theme?: EnumNotificationTheme;
}

export const Notification: FC<INotificationProps> = ({
  className,
  theme = EnumNotificationTheme.WARNING
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Notification, {}, [className, cls[theme]])}>
      <div className={cls.icon}>{icons[theme]}</div>
      <div className={cls.text}>dsfadsfasdf</div>
    </div>
  );
};
