import { ThemeBody, ThemeTitle } from "../../../styles/typography";
import { Button } from "../../Button";
import * as S from "./styles";

interface iProjects {
  name: string;
  image: string;
  vercelLink: string;
  githubLink: string;
  description: string;
  tecs: string;
}

export function ProjectCard({
  name,
  image,
  vercelLink,
  githubLink,
  description,
  tecs,
}: iProjects) {
  return (
    <S.Div>
      <S.Figure>
        <img src={image} alt={name} />
      </S.Figure>
      <S.DivInfo>
        <ThemeTitle fontSize="xs" tag="h4">
          {name}
        </ThemeTitle>
        <ThemeBody fontSize="sm">{description}</ThemeBody>
        <ThemeBody fontSize="sm">
          <b>Tecnologias:</b> {tecs}
        </ThemeBody>
        <S.DivButtons>
          <Button buttonStyle="outlineWhite" buttonSize="xs">
            Link
          </Button>
          <Button buttonStyle="outlineWhite" buttonSize="xs">
            Github
          </Button>
        </S.DivButtons>
      </S.DivInfo>
    </S.Div>
  );
}
