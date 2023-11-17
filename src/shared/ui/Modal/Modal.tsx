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
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

export interface IModalProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export const Modal: FC<IModalProps> = ({ className, isOpen, setIsOpen, children }) => {
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

  return modalExistsOnPage ? (
    <Portal>
      <div>
        <Backdrop close={closeModal} showBackdrop={showContent} />
        <div
          className={classNames(cls.Modal, { [cls.opened]: showContent }, [className])}
        >
          {children}
        </div>
      </div>
    </Portal>
  ) : (
    <></>
  );
};
