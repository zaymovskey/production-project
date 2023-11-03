import { useContext } from 'react';
import {
  EnumTheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext
} from 'app/providers/ThemeProvider/lib/ThemeContext';

interface IUseThemeResult {
  theme: EnumTheme;
  toggleTheme: () => void;
}

export function useTheme (): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const newTheme: EnumTheme =
      theme === EnumTheme.LIGHT ? EnumTheme.DARK : EnumTheme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.className = newTheme;
  };

  return {
    theme,
    toggleTheme
  };
}
