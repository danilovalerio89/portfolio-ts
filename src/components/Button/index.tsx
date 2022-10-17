import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";
import { IconType } from "react-icons";
import { DivStyled } from "./styles";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: string;
//   icon?: IconType | JSX.Element;
// }
// interface ButtonProps
//   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>> {
//   children: ReactNode;
//   icon?: IconType | JSX.Element;
// }

interface DivProps
  extends ButtonHTMLAttributes<HTMLButtonElement & HTMLDivElement> {
  children?: ReactNode;
}

export function Button({ children, ...rest }: DivProps): JSX.Element {
  return <DivStyled {...rest}>{children}</DivStyled>;
}
