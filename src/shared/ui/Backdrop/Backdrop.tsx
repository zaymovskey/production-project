import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Backdrop.module.scss';

interface IBackdropProps {
  className?: string;
  close: () => void;
  showBackdrop: boolean;
}

export const Backdrop: FC<IBackdropProps> = ({ className, close, showBackdrop }) => {
  return (
    <div
      onClick={close}
      className={classNames(cls.Backdrop, { [cls.showBackdrop]: showBackdrop }, [
        className
      ])}
    ></div>
  );
};
