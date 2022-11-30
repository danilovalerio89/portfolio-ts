import { useState } from "react";
import { FiLink, FiGithub } from "react-icons/fi";
import { useSpring, animated } from "react-spring";
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
  const [show, setShown] = useState(false);

  const scale = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
  });
  return (
    <animated.div
      style={scale}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
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
            <Button
              buttonStyle="outlineBlack"
              buttonSize="sm"
              onClick={() => window.open(vercelLink, "_blank")}
            >
              <FiLink style={{ fill: "black" }} />
              Link
            </Button>
            <Button
              buttonStyle="outlineWhite"
              buttonSize="sm"
              onClick={() => window.open(githubLink, "_blank")}
            >
              <FiGithub style={{ fill: "black" }} />
              Github
            </Button>
          </S.DivButtons>
        </S.DivInfo>
      </S.Div>
    </animated.div>
  );
}
