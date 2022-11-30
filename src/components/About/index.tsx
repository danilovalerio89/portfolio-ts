import * as S from "./styles";
import { Button } from "../Button";
import { iInfos } from "../../data/InfosData";
import { TitleBounce } from "./TitleBounce";
import { ThemeBody, ThemeTitle } from "../../styles/typography";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function About({ data }: iInfos) {
  const { name, stack, links } = data;

  const nameBounce = name.split("");

  return (
    <S.Section id="about">
      <S.DivAbout>
        <ThemeBody fontSize="lg">Olá, sou o</ThemeBody>
        <S.DivTitle>
          {nameBounce.map((letter, index) => (
            <TitleBounce key={index}>{letter}</TitleBounce>
          ))}
        </S.DivTitle>
        <ThemeTitle tag="h2" fontSize="xs">
          {stack.toUpperCase()}
        </ThemeTitle>
      </S.DivAbout>
      <S.DivText>
        <ThemeBody fontSize="md">{data.text}</ThemeBody>

        <S.DivButtons>
          <Button
            buttonStyle="outlineWhite"
            buttonSize="sm"
            fullWidth="45"
            onClick={() => window.open(links.git, "_blank")}
          >
            <FiGithub style={{ fill: "black" }} size={20} />
            GitHub
          </Button>
          <Button
            buttonSize="sm"
            buttonStyle="outlineBlack"
            fullWidth="45"
            onClick={() => window.open(links.linkedin, "_blank")}
          >
            <FiLinkedin style={{ fill: "black" }} size={20} />
            LinkedIn
          </Button>
        </S.DivButtons>
      </S.DivText>
    </S.Section>
  );
}
