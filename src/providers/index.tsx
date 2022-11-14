import { IsOpenProvider } from "./isOpen";
import { MyThemeProvider } from "./theme";
import { ReactNode } from "react";

interface iProviders {
  children: ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return (
    <MyThemeProvider>
      <IsOpenProvider>{children}</IsOpenProvider>;
    </MyThemeProvider>
  );
};
