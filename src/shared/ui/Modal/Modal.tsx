import {
  type Dispatch,
  type FC,
  type MutableRefObject,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Backdrop } from 'shared/ui/Backdrop/Backdrop';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

export interface IModalProps {
  className?: string;
  children?: ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  closeByBackdrop?: boolean;
  closeModalRef?: MutableRefObject<() => void>;
}

export const Modal: FC<IModalProps> = ({
  className,
  children,
  setShowModal,
  closeByBackdrop = true,
  closeModalRef
}) => {
  const [showContent, setShowContent] = useState(false);

  const closeHandler = useCallback((): void => {
    setShowContent(false);
    setTimeout(() => {
      setShowModal(false);
    }, 100);
  }, [setShowModal]);

  useEffect(() => {
    if (closeModalRef != null) closeModalRef.current = closeHandler;

    setShowContent(true);
  }, [closeHandler, closeModalRef]);

  const closeByBackdropHandler = useCallback((): void => {
    if (closeByBackdrop) closeHandler();
  }, [closeHandler, closeByBackdrop]);

  const onKeyDown = useCallback(
    (e: globalThis.KeyboardEvent): void => {
      if (e.key === 'Escape') closeHandler();
    },
    [closeHandler]
  );

  useEffect(() => {
    if (showContent) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showContent, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.showModal]: showContent
  };

  return (
    <Portal>
      <div>
        <Backdrop close={closeByBackdropHandler} showBackdrop={showContent} />
        <div className={classNames(cls.Modal, mods)}>
          <div className={classNames(cls.children, {}, [className])}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
