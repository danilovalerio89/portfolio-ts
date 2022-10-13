import { useIsOpen } from "../../providers/isOpen";
import MenuBurguer from "../MenuBurguer";
import { HeaderStyled, DivTitle, SideBar } from "./styles";

export function Header() {
  const { isOpen } = useIsOpen();

  return (
    <>
      <HeaderStyled>
        <DivTitle>
          <h1>Danilo</h1>
          <MenuBurguer />
        </DivTitle>
        <SideBar isOpen={isOpen}>
          <ul id="menu">
            <li>About me</li>
            <li>Techs</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </SideBar>
      </HeaderStyled>
    </>
  );
}
