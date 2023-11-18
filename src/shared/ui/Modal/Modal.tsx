import {
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Backdrop } from 'shared/ui/Backdrop/Backdrop';
import { Loader } from 'shared/ui/Loader/Loader';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

export interface IModalProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  closeByBackdrop?: boolean;
  loading?: boolean;
}

export const Modal: FC<IModalProps> = ({
  className,
  isOpen,
  setIsOpen,
  children,
  closeByBackdrop = true,
  loading = false
}) => {
  const [showContent, setShowContent] = useState(false);
  const [modalExistsOnPage, setModalExistsOnPage] = useState(false);

  const closeModal = useCallback(() => {
    setShowContent(false);
    setTimeout(() => {
      setIsOpen(false);
      setModalExistsOnPage(false);
    }, 200);
  }, [setIsOpen]);

  useEffect(() => {
    if (!isOpen) {
      closeModal();
      return;
    }
    setModalExistsOnPage(true);
    setTimeout(() => {
      setShowContent(true);
    }, 0);
  }, [closeModal, isOpen]);

  const closeByBackdropHandler = useCallback((): void => {
    if (closeByBackdrop) closeModal();
  }, [closeModal, closeByBackdrop]);

  const onKeyDown = useCallback(
    (e: globalThis.KeyboardEvent): void => {
      if (e.key === 'Escape') closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    if (showContent) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showContent, onKeyDown]);

  return modalExistsOnPage ? (
    <Portal>
      <div className={cls.modalWrapper}>
        <Backdrop close={closeByBackdropHandler} showBackdrop={showContent} />
        <div
          className={classNames(cls.Modal, { [cls.opened]: showContent }, [className])}
        >
          <div className={cls.content}>
            <div className={cls.loading}>
              <Loader className={classNames(cls.loader, { [cls.show]: loading })} />
            </div>
            <div className={classNames(cls.children, { [cls.hide]: loading })}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  ) : (
    <></>
  );
};
