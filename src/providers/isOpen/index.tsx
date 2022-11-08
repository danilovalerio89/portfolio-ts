import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface IsOpenContextProps {
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
}

interface IsOpenProps {
  children: ReactNode;
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
