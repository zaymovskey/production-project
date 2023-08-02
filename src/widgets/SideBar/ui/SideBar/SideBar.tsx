import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./SideBar.module.scss";
import React, { useState } from "react";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { Hamburger } from "shared/ui/Hamburger/Hamburger";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [active, setActive] = useState(false);

  const onToggle = () => {
    setActive(!active);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.active]: active }, [
        className,
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <ThemeSwitcher />
      <Hamburger active={active} setActive={setActive} />
    </div>
  );
};
