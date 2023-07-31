import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./SideBar.module.scss";
import React, { useState } from "react";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <ThemeSwitcher />
    </div>
  );
};
