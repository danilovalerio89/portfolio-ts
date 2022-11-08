import { ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  buttonSize?: "xs" | "sm" | "md" | "lg" | "xl" | "link";
  buttonStyle:
    | "solidBlack"
    | "solidWhite"
    | "outlineBlack"
    | "outlineWhite"
    | "link";
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
