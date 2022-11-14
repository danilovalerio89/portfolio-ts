// import { About } from "../../components/About";
import { Header } from "../../components/Header";
// import { Tecnology } from "../../components/Tecnology";
import * as S from "./styles";
import { Infos } from "../../data/InfosData";
import { Footer } from "../../components/Footer";
// import { Project } from "../../components/Projects";
// import { BaseTitle } from "../../styles/components/typography";
// import { ThemeBody, ThemeTitle } from "../../styles/typography";
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
        {/* <About data={Infos} />
         */}
        {/* <Tecnology />
        <Project /> */}
        {/* <div>
          <S.TestH1>Danilo Teste 1</S.TestH1>
          <S.TestH2>Danilo Teste 2</S.TestH2>
          <S.TestH3>Danilo Teste 3</S.TestH3>
        </div> */}
        <Button
          buttonStyle={"outlineBlack"}
          buttonSize={"lg"}
          onClick={() => handleTheme()}
        >
          Change Theme
        </Button>

        <S.Div1>Danilo 1</S.Div1>
        <S.Div2>Danilo 2</S.Div2>
        <S.Div3>Danilo 3</S.Div3>
        {/* <S.Div4>Danilo 4</S.Div4>
        <S.Div5>Danilo 5</S.Div5>
        <S.Div6>Danilo 6</S.Div6> */}
      </S.Main>
      <Footer data={Infos} />
    </>
  );
}

{
  /* <ThemeTitle tag="h1" fontSize="xl">
          Heading 1
        </ThemeTitle>
        <ThemeTitle tag="h2" fontSize="lg">
          Heading 2
        </ThemeTitle>
        <ThemeTitle tag="h3" fontSize="md">
          Heading 3
        </ThemeTitle>
        <ThemeTitle tag="h4" fontSize="sm">
          Heading 4
        </ThemeTitle>
        <ThemeTitle tag="h5" fontSize="xs">
          Heading 5
        </ThemeTitle>

        <ThemeBody fontSize="lg">Body 1</ThemeBody>
        <ThemeBody fontSize="md">Body 2</ThemeBody>
        <ThemeBody fontSize="sm">Body 3</ThemeBody> */
}
