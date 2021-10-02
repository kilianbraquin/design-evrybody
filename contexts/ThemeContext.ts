import { createContext } from "react";

export type ThemeOption = "light" | "dark";

export type ThemeContextProps = {
  theme: ThemeOption;
  setTheme: (
    newValue: ThemeOption | ((previousValue: ThemeOption) => ThemeOption)
  ) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => null,
});
