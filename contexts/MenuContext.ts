import { createContext, Dispatch, SetStateAction } from "react";

export type MenuContextProps = {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextProps>({
  activeMenu: false,
  setActiveMenu: () => null,
});
