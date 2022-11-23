import * as S from "./styles";
import { About, Header, Footer, Project, Tecnology } from "../../components";
import { ThemeButton } from "../../components/Button/ButtonIcon";
import { Infos } from "../../data/InfosData";
import { useTheme } from "../../providers/theme";
import light from "../../styles/theme/light";
import dark from "../../styles/theme/dark";
import { useState } from "react";

export function Home() {
  const { theme, setTheme } = useTheme();
  const [buttonTheme, setButtonTheme] = useState<boolean>(true);

  const handleTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
    setButtonTheme(!buttonTheme);
  };

  return (
    <>
      <Header />
      <S.Main>
        <S.DivTheme>
          <ThemeButton darkMode={buttonTheme} onClick={() => handleTheme()}>
            Thema
          </ThemeButton>
        </S.DivTheme>
        <About data={Infos} />
        <Tecnology />
        <Project />
      </S.Main>
      <Footer data={Infos} />
    </>
  );
}
