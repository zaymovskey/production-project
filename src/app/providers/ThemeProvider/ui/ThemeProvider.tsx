// Провайдер нужен для глобального доступа
import { type FC, type ReactNode, useMemo, useState } from 'react';
import {
  EnumTheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext
} from 'app/providers/ThemeProvider';

interface IParentCompProps {
  children?: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) as EnumTheme ??
  (window.matchMedia('(prefers-color-scheme: light)').matches ? EnumTheme.LIGHT : EnumTheme.DARK);

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
