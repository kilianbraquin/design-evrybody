import { createContext } from "react";

export type MenuContextProps = {
  activeMenu: boolean;
  setActiveMenu: (
    newValue: boolean | ((previousValue: boolean) => boolean)
  ) => void;
};

export const MenuContext = createContext<MenuContextProps>({
  activeMenu: false,
  setActiveMenu: () => null,
});
