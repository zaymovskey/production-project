import {createContext} from "react";

export enum EnumTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContextProps {
  theme?: EnumTheme;
  setTheme?: (theme: EnumTheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';