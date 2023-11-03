import { Portal } from 'shared/ui/Portal/Portal';
import { _Modal, type IModalProps } from 'shared/ui/Modal/_Modal';
import { type FC } from 'react';

export const Modal: FC<IModalProps> = (props) => {
  return (
    <Portal>
      <_Modal {...props}/>
    </Portal>
  );
};
