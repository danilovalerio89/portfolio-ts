import * as S from "./styles";
import { Button } from "../Button";
import { iInfos } from "../../data/InfosData";
import { TitleBounce } from "./TitleBounce";

export function About({ data }: iInfos) {
  const { name, stack, links } = data;

  const nameBounce = name.split("");

  return (
    <S.Section>
      <S.DivAbout>
        <p>Olá, sou o</p>
        <S.DivTitle>
          {nameBounce.map((letter, index) => (
            <TitleBounce key={index}>{letter}</TitleBounce>
          ))}
        </S.DivTitle>
        <h2>{stack.toUpperCase()}</h2>
      </S.DivAbout>
      <S.DivText>
        <p>{data.text}</p>

        <S.DivButtons>
          <Button
            buttonStyle="outlineWhite"
            buttonSize="sm"
            onClick={() => window.open(links.git, "_blank")}
          >
            GitHub
          </Button>
          <Button
            buttonSize="sm"
            buttonStyle="outlineWhite"
            onClick={() => window.open(links.linkedin, "_blank")}
          >
            LinkedIn
          </Button>
        </S.DivButtons>
      </S.DivText>
    </S.Section>
  );
}
