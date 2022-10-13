import { IsOpenProvider } from "./isOpen";
import { IsOpenProps } from "./@types/interfaces";

export const Providers = ({ children }: IsOpenProps) => {
  return <IsOpenProvider>{children}</IsOpenProvider>;
};
