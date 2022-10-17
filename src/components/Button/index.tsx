import { ButtonHTMLAttributes, ReactNode } from "react";

import { DivStyled } from "./styles";

interface DivProps
  extends ButtonHTMLAttributes<HTMLButtonElement & HTMLDivElement> {
  children?: ReactNode;
}

export function Button({ children, ...rest }: DivProps): JSX.Element {
  return <DivStyled {...rest}>{children}</DivStyled>;
}
