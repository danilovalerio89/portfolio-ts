import * as S from "./styles";
import { Button } from "../Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { iInfos } from "../../data/InfosData";

export function About({ data }: iInfos) {
  return (
    <S.AboutSection>
      <S.AboutPresentation>
        <img src={data.img} alt="Profile Photo" />
        <S.DivPresentation>
          <h3>Olá, tudo bom? Sou o</h3>
          <h1>{data.name}</h1>
        </S.DivPresentation>
      </S.AboutPresentation>

      <S.AboutInfo>
        <S.DivInfo>
          <h2>{data.stack}</h2>
          <h3>{data.text}</h3>
        </S.DivInfo>
        <S.DivButtons>
          <Button
            buttonStyle="solidBlack"
            buttonSize="xs"
            onClick={() => window.open(`${data.links.git}`, "_blank")}
          >
            <BsGithub />
            Github
          </Button>
          <Button
            buttonStyle="outlineBlack"
            buttonSize="xs"
            onClick={() => window.open(`${data.links.linkedin}`, "_blank")}
          >
            <BsLinkedin />
            Linkedin
          </Button>
        </S.DivButtons>
      </S.AboutInfo>
    </S.AboutSection>
  );
}
