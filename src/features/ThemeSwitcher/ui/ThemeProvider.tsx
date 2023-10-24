// Провайдер нужен для глобального доступа
import React, { type FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  EnumTheme,
  ThemeContext
} from 'features/ThemeSwitcher/lib/ThemeContext';

interface IParentCompProps {
  children?: React.ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) as EnumTheme ??
  EnumTheme.LIGHT;

const ThemeProvider: FC<IParentCompProps> = ({ children }) => {
  const [theme, setTheme] = useState<EnumTheme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
