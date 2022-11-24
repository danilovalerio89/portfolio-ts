import * as S from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
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
  ...rest
}: iButton) {
  return (
    <S.Button
      buttonStyle={buttonStyle}
      fullWidth={fullWidth}
      buttonSize={buttonSize}
      {...rest}
    >
      {children}
    </S.Button>
  );
}
