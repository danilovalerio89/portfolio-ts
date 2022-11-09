import * as S from "./styles";
import { Button } from "../Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { iInfos } from "../../data/InfosData";

export function About({ data }: iInfos) {
  return (
    <S.AboutSection>
      <div>
        <p>Olá, sou o</p>
        <h1>Danilo</h1>
        <h2>DESENVOLVEDOR FULL STACK</h2>
      </div>
      <div>
        <p>
          Futuro desenvolvedor FullStack pela KENZIE ACADEMY BRASIL. Sempre
          buscando mais conhecimento e novos desafios. A constante evolução e a
          possibilidade de resolver problemas de várias maneiras, são coisas que
          me fazem me apaixonar cada vez mais pela área.
        </p>
      </div>
      {/* <Title tag="h2">Danilo</Title>
      <Title tag="h3">Danilo</Title>
      <Title tag="h4">Danilo</Title>
      <Title tag="h5">Danilo</Title>
      <Title tag="h6">Danilo</Title> */}
    </S.AboutSection>
  );
}
