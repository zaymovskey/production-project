import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import React, { type FC, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Hamburger } from 'shared/ui/Hamburger/Hamburger';
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher';

interface SideBarProps {
  className?: string
}

export const SideBar: FC = ({ className }: SideBarProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={classNames(cls.SideBar, { [cls.active]: active }, [
        className
      ])}
    >
      <div className={cls.header}>
        <Hamburger active={active} setActive={setActive} />
      </div>

      <div className={cls.actions}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
