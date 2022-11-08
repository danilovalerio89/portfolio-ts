import { IsOpenProvider } from "./isOpen";
import { ReactNode } from "react";

interface iProviders {
  children: ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return <IsOpenProvider>{children}</IsOpenProvider>;
};
