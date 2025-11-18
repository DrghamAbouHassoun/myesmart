"use client";
import React, { createContext, useState } from "react";

type MenuContextType = {
  active: boolean;
  setActive: (value: boolean) => void;
};

export const MenuContext = createContext<MenuContextType>({
  active: false,
  setActive: () => {},
});

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);
  return (
    <MenuContext.Provider value={{ active, setActive }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
