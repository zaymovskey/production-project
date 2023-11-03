import {
  type Dispatch,
  type FC,
  type MouseEvent,
  type ReactNode,
  type SetStateAction, useCallback,
  useEffect
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

export interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  overlayClose?: boolean;
}

export const _Modal: FC<IModalProps> = ({
  className,
  children,
  isOpen,
  setIsOpen,
  overlayClose = true
}) => {
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  };

  const closeHandler = useCallback((): void => {
    if (setIsOpen != null) setIsOpen(false);
  }, [setIsOpen]);

  const onContentClick = (e: MouseEvent): void => {
    e.stopPropagation();
  };

  const onOverlayClick = (): void => {
    console.log('huy');
    if (overlayClose) closeHandler();
  };

  const onKeyDown = useCallback((e: globalThis.KeyboardEvent): void => {
    if (e.key === 'Escape') closeHandler();
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={onOverlayClick}>
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
