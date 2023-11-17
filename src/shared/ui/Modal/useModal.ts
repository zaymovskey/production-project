import { type MutableRefObject, useRef, useState } from 'react';

type ref = () => void;

export function useModal(): readonly [
  boolean,
  (value: ((prevState: boolean) => boolean) | boolean) => void,
  MutableRefObject<ref>
] {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = useRef<ref>(() => {
    console.log('zalupa');
  });

  return [modalIsOpen, setModalIsOpen, closeModal] as const;
}
