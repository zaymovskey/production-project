import {LOCAL_STORAGE_THEME_KEY, EnumTheme, ThemeContext} from "shared/lib/ThemeContext";
import {useContext} from "react";

interface IUseThemeResult {
  theme: EnumTheme;
  toggleTheme: () => void;
}

export function useTheme(): IUseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentIndex = Object.values(EnumTheme).indexOf(theme);
    const len = Object.values(EnumTheme).length
    const currentElementIsLast = currentIndex !== len - 1;
    const newTheme = currentElementIsLast ? Object.values(EnumTheme)[currentIndex + 1] : Object.values(EnumTheme)[0];
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return  {
    theme,
    toggleTheme,
  }
}