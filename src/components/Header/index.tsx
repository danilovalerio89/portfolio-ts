import MenuBurguer from "./MenuBurguer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { HeaderStyled, DivTitle } from "./styles";

import { SideBarData } from "../../data/SideBarData";

export function Header(): JSX.Element {
  return (
    <>
      <HeaderStyled>
        <DivTitle>
          <h1>
            &lt;<b>D</b>/&gt;
          </h1>
          <NavBar data={SideBarData} />
          <MenuBurguer />
        </DivTitle>
        <SideBar data={SideBarData} />
      </HeaderStyled>
    </>
  );
}
