import * as S from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  buttonSize?: "xs" | "sm" | "md" | "lg" | "xl" | "link" | "linkNav";
  buttonStyle:
    | "solidBlack"
    | "solidWhite"
    | "outlineBlack"
    | "outlineWhite"
    | "link"
    | "linkNav";
}

export function Button({
  children,
  buttonStyle,
  fullWidth,
  buttonSize,
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
