import MenuBurguer from "./MenuBurguer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { HeaderStyled, DivTitle } from "./styles";
import { Typography } from "../../styles/typography";

import { SideBarData } from "../../data/SideBarData";

export function Header(): JSX.Element {
  return (
    <>
      <HeaderStyled>
        <DivTitle>
          <Typography tag={"h1"} fS={2}>
            &lt;<b>D</b>/&gt;
          </Typography>
          <NavBar data={SideBarData} />
          <MenuBurguer />
        </DivTitle>
        <SideBar data={SideBarData} />
      </HeaderStyled>
    </>
  );
}
