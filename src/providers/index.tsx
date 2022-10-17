import { IsOpenProvider } from "./isOpen";
import { IsOpenProps } from "./interfaces";

export const Providers = ({ children }: IsOpenProps) => {
  return <IsOpenProvider>{children}</IsOpenProvider>;
};
