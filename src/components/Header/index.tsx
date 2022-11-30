import MenuBurguer from "./MenuBurguer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
// import { useTheme } from "../../providers/theme";
// import dark from "../../styles/theme/dark";
// import light from "../../styles/theme/light";
import * as S from "./styles";
import { ThemeTitle } from "../../styles/typography";

export function Header() {
  // const { theme, setTheme } = useTheme();

  // const handleTheme = () => {
  //   setTheme(theme.name === "light" ? dark : light);
  // };

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
