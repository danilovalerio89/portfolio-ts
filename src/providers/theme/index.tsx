import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import dark from "../../styles/theme/dark";
import { DefaultTheme } from "styled-components";

interface iMyThemeProvider {
  children: ReactNode;
}

interface iMyThemeContext {
  theme: {
    name: string;
    background: {
      default: string;
      primary: string;
      secondary: string;
    };
    text: string;
    black: string;
    white: string;
  };

  setTheme: (value: DefaultTheme) => void;
}

const defaultTheme = {
  theme: dark,
  setTheme: () => {},
};

export const MyThemeContext = createContext<iMyThemeContext>(defaultTheme);

export function MyThemeProvider({ children }: iMyThemeProvider) {
  const [theme, setTheme] = useState(defaultTheme.theme);

  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyThemeContext.Provider>
  );
}
export const useTheme = () => useContext(MyThemeContext);
