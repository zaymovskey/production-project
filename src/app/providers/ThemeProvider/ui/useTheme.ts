import {EnumTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "app/providers/ThemeProvider/ui/ThemeContext";
import {useContext} from "react";

interface IUseThemeResult {
  theme: EnumTheme;
  toggleTheme: () => void;
}

export function useTheme(): IUseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === EnumTheme.LIGHT ? EnumTheme.DARK : EnumTheme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return  {
    theme,
    toggleTheme,
  }
}