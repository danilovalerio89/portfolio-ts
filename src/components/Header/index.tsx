import MenuBurguer from "./MenuBurguer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { HeaderStyled, DivTitle } from "./styles";

export function Header() {
  return (
    <>
      <HeaderStyled>
        <DivTitle>
          <h1>
            &lt;<b>D</b>&gt;
          </h1>
          <NavBar />
          <MenuBurguer />
        </DivTitle>
        <SideBar />
      </HeaderStyled>
    </>
  );
}
