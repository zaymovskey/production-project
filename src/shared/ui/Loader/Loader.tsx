import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC = ({ className }: ILoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
