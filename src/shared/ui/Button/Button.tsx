import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type FC } from 'react';

interface ButtonProps {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ className }) => {
  return <button className={classNames(cls.Button, {}, [className])}></button>;
};
