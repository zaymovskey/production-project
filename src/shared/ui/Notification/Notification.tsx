import { type FC, type ReactNode } from 'react';
import { WarningIcon, ErrorCloseIcon } from 'shared/assets/icons';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ITextProps, Text } from 'shared/ui/Text/Text';
import cls from './Notification.module.scss';

export enum EnumNotificationTheme {
  WARNING = 'warning',
  ERROR = 'error'
}

const icons: Record<EnumNotificationTheme, ReactNode> = {
  warning: <WarningIcon />,
  error: <ErrorCloseIcon />
};

interface INotificationProps extends ITextProps {
  className?: string;
  theme?: EnumNotificationTheme;
}

export const Notification: FC<INotificationProps> = ({
  className,
  theme = EnumNotificationTheme.WARNING,
  ...textProps
}) => {
  return (
    <div className={classNames(cls.Notification, {}, [className, cls[theme]])}>
      <div className={cls.icon}>{icons[theme]}</div>
      <div className={cls.text}>
        <Text text={textProps.text} title={textProps.title} />
      </div>
    </div>
  );
};
