import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Tecnology } from "../../components/Tecnology";
import * as S from "./styles";
import { Infos } from "../../data/InfosData";
import { Footer } from "../../components/Footer";
import { Project } from "../../components/Projects";

import { Button } from "../../components/Button";
import { useTheme } from "../../providers/theme";
import light from "../../styles/theme/light";
import dark from "../../styles/theme/dark";

export function Home() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <>
      <Header />
      <S.Main>
        <S.DivTheme>
          <button onClick={() => handleTheme()}>Thema</button>
        </S.DivTheme>
        <About data={Infos} />

        <Tecnology />
        <Project />
      </S.Main>
      <Footer data={Infos} />
    </>
  );
}
