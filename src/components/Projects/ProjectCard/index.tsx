import { ThemeBody, ThemeTitle } from "../../../styles/typography";
import * as S from "./styles";

interface iProjects {
  name: string;
  image: string;
  vercelLink: string;
  githubLink: string;
}

export function ProjectCard({
  name,
  image,
  vercelLink,
  githubLink,
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
        <ThemeBody fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          facilis accusantium dolores repudiandae ducimus cumque, doloribus
          sapiente quo expedita, maxime beatae aliquid quidem. Eveniet
          voluptatum laborum facilis temporibus provident soluta.
        </ThemeBody>
        <ThemeBody fontSize="sm">
          Tecnologias: React, JavaScript, Axios, ContextAPI e Styled-Components
        </ThemeBody>
      </S.DivInfo>
      <S.DivButtons>
        <button>git hub</button>
        <button>link</button>
      </S.DivButtons>
    </S.Div>
  );
}
