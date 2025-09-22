"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

interface NavContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const NavContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
};
