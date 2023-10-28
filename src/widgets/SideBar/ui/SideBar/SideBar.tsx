import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import React, { type FC, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Hamburger } from 'shared/ui/Hamburger/Hamburger';
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher';

import ReactLogo from 'shared/assets/icons/react-16-svgrepo-com.svg';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC = ({ className }: SideBarProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.SideBar, { [cls.active]: active }, [
        className
      ])}
    >
      <div className={cls.header}>
        <Hamburger
          active={active}
          setActive={setActive}
        />
      </div>

      <ReactLogo style={{ height: 50, width: 50 }}/>

      <div className={cls.actions}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
