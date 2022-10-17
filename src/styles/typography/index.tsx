import { ReactNode } from "react";
import * as Typo from "./styles";

export const colors = {
  white: "#fff",
  black: "#000",
  grey: "#D4D4D4",
  blue: "#201DAD",
};

export interface iTypography {
  tag?: string;
  children?: ReactNode;
  fS?: 1 | 2 | 3;
  fW?: 1 | 2 | 3;
  lS?: 1 | 2 | 3;
  clr?: keyof typeof colors;
}

export function Typography({
  children,
  tag = "p",
  fS = 3,
  fW = 2,
  lS = 1,
  clr = "white",
}: iTypography) {
  return (
    <>
      {tag == "h1" ? (
        <Typo.H1 fS={fS} fW={fW} lS={lS} clr={clr}>
          {children}
        </Typo.H1>
      ) : tag == "h2" ? (
        <Typo.H2 as="h2" fS={fS} fW={fW} lS={lS} clr={clr}>
          {children}
        </Typo.H2>
      ) : tag == "h3" ? (
        <Typo.H3 as="h3" fS={fS} fW={fW} lS={lS} clr={clr}>
          {children}
        </Typo.H3>
      ) : tag == "h4" ? (
        <Typo.H4 as="h4" fS={fS} fW={fW} lS={lS} clr={clr}>
          {children}
        </Typo.H4>
      ) : tag == "h5" ? (
        <Typo.H5 as="h5" fS={fS} fW={fW} lS={lS} clr={clr}>
          {children}
        </Typo.H5>
      ) : (
        <Typo.P as="p" fS={fS} fW={fW} lS={lS} clr={clr}>
          {children}
        </Typo.P>
      )}
    </>
  );
}
