import { classNames } from 'shared/lib/classNames/classNames';
import { type FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Hamburger } from 'shared/ui/Hamburger/Hamburger';
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher';

interface ISideBarProps {
  className?: string;
}

export const Sidebar: FC = ({ className }: ISideBarProps) => {
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

      <div className={cls.actions}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
