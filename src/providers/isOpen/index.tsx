import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface IsOpenProps {
  children: ReactNode;
}

interface IsOpenContextProps {
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
}

const defaultState = {
  isOpen: false,
  setIsOpen: () => {},
};

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
