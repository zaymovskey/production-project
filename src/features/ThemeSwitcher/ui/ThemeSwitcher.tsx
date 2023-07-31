import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import React from "react";
import { useTheme } from "features/ThemeSwitcher/lib/useTheme";
import { EnumTheme } from "features/ThemeSwitcher/lib/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
      <input
        type="checkbox"
        id="switch"
        className={cls.checkbox}
        checked={theme === EnumTheme.DARK}
        onChange={toggleTheme}
      />
      <label htmlFor="switch" className={cls.button} />
      <div className={cls.cloud} />
      <div className={cls.stars}>
        <div className={cls.starsItem}>★</div>
        <div className={cls.starsItem}>★</div>
        <div className={cls.starsItem}>★</div>
      </div>
    </div>
  );
};
