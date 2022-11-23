import * as S from "./styles";
import { About, Header, Footer, Project, Tecnology } from "../../components";
import { Infos } from "../../data/InfosData";
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
