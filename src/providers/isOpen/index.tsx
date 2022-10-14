import { createContext, useContext, useState } from "react";
import { IsOpenContextProps, IsOpenProps, defaultState } from "../interfaces";

export const IsOpenContext = createContext<IsOpenContextProps>(defaultState);

export function IsOpenProvider({ children }: IsOpenProps) {
  const [isOpen, setIsOpen] = useState(defaultState.isOpen);

  return (
    <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
}

export const useIsOpen = () => useContext(IsOpenContext);
