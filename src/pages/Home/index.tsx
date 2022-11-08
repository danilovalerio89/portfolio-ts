import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Tecnology } from "../../components/Tecnology";
import * as S from "./styles";
import { Infos } from "../../data/InfosData";
import { Footer } from "../../components/Footer";
import { Project } from "../../components/Projects";

export function Home() {
  return (
    <>
      <Header />
      <S.Main>
        <About data={Infos} />
        <Tecnology />
        <Project />
      </S.Main>
      <Footer data={Infos} />
    </>
  );
}
