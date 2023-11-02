import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { type FC, useId } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { EnumTheme } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const checkboxId = useId();

  return (
    <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
      <input
        type="checkbox"
        id={checkboxId}
        className={cls.checkbox}
        checked={theme === EnumTheme.DARK}
        onChange={toggleTheme}
      />

      <label htmlFor={checkboxId} className={cls.button} />

      <div className={cls.cloud} />

      <div className={cls.stars}>
        {/* eslint-disable i18next/no-literal-string */}
        <div className={cls.starsItem}>★</div>
        <div className={cls.starsItem}>★</div>
        <div className={cls.starsItem}>★</div>
        {/* eslint-enable i18next/no-literal-string */}
      </div>
    </div>
  );
};
