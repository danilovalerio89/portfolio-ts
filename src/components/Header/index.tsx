import MenuBurguer from "./MenuBurguer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import * as S from "./styles";
import { ThemeTitle } from "../../styles/typography";

export function Header() {
  return (
    <>
      <S.HeaderStyled>
        <S.DivTitle>
          <ThemeTitle tag="h2" fontSize="xl">
            &lt;<b>D</b>&gt;
          </ThemeTitle>
          <NavBar />
          <MenuBurguer />
        </S.DivTitle>
        <SideBar />
      </S.HeaderStyled>
    </>
  );
}
