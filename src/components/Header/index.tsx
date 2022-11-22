import MenuBurguer from "./MenuBurguer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { useTheme } from "../../providers/theme";
import dark from "../../styles/theme/dark";
import light from "../../styles/theme/light";
import { Button } from "../Button";
import * as S from "./styles";

export function Header() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <>
      <S.HeaderStyled>
        <S.DivTitle>
          <h1>
            &lt;<b>D</b>&gt;
          </h1>
          <NavBar />
          <MenuBurguer />
        </S.DivTitle>
        <SideBar />
      </S.HeaderStyled>
    </>
  );
}
