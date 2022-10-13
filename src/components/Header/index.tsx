import { useIsOpen } from "../../providers/isOpen";
import MenuBurguer from "../MenuBurguer";
import { SideBar } from "../SideBar";
import { HeaderStyled, DivTitle } from "./styles";

export function Header() {
  const { isOpen } = useIsOpen();

  return (
    <>
      <HeaderStyled>
        <DivTitle>
          <h1>
            &lt;<b>Danilo</b>/&gt;
          </h1>
          <MenuBurguer />
        </DivTitle>
        <SideBar />
      </HeaderStyled>
    </>
  );
}
