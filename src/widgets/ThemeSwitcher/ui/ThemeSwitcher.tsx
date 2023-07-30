import {classNames} from "helpers/ClassNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import React from "react";
import {useTheme} from "app/providers/ThemeProvider/ui/useTheme";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {toggleTheme} = useTheme();

  return (
    <button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
      Изменить тему
    </button>
  );
};