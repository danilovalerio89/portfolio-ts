import { ReactNode } from "react";

export interface IsOpenContextProps {
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
}

export interface IsOpenProps {
  children: ReactNode;
}

export const defaultState = {
  isOpen: false,
  setIsOpen: () => {},
};
