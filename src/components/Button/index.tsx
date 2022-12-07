import * as S from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: string;
  justify?: "left" | "center" | "right";
  buttonSize?: "sm" | "md" | "lg" | "link" | "linkNav";
  buttonStyle:
    | "solidBlack"
    | "solidWhite"
    | "solidDefault"
    | "solidPrimary"
    | "solidSecondary"
    | "outlineBlack"
    | "outlineWhite"
    | "outlineDefault"
    | "outlinePrimary"
    | "outlineSecondary"
    | "link"
    | "linkNav";
}

export function Button({
  children,
  buttonStyle = "solidBlack",
  buttonSize = "md",
  fullWidth,
  justify = "center",
  ...rest
}: iButton) {
  return (
    <S.Button
      buttonStyle={buttonStyle}
      fullWidth={fullWidth}
      buttonSize={buttonSize}
      justify={justify}
      {...rest}
    >
      {children}
    </S.Button>
  );
}
