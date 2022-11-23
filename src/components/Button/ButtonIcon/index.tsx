import * as S from "./styles";
import { ButtonHTMLAttributes } from "react";
import { TbSunrise, TbSunset } from "react-icons/tb";

interface iButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  darkMode: boolean;
}

export function ThemeButton({ darkMode, ...rest }: iButtonIcon) {
  return (
    <S.Button {...rest}>
      {darkMode ? <TbSunrise size={45} /> : <TbSunset size={45} />}
    </S.Button>
  );
}
