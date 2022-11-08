import MenuBurguer from "./MenuBurguer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { HeaderStyled, DivTitle } from "./styles";
import { LOGO } from "../../styles/typography/styles";

export function Header() {
  return (
    <>
      <HeaderStyled>
        <DivTitle>
          <LOGO>
            &lt;<b>D</b>&gt;
          </LOGO>
          <NavBar />
          <MenuBurguer />
        </DivTitle>
        <SideBar />
      </HeaderStyled>
    </>
  );
}
