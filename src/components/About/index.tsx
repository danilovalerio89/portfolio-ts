import { Button } from "../Button";
import * as Component from "./styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { iInfos } from "../../data/InfosData";

export function About({ data }: iInfos) {
  return (
    <Component.AboutSection>
      <Component.AboutPresentation>
        <img src={data.img} alt="Profile Photo" />
        <Component.DivPresentation>
          <h3>Olá, tudo bom? Sou o</h3>
          <h1>{data.name}</h1>
        </Component.DivPresentation>
      </Component.AboutPresentation>

      <Component.AboutInfo>
        <Component.DivInfo>
          <h2>{data.stack}</h2>
          <h3>{data.text}</h3>
        </Component.DivInfo>
        <Component.DivButtons>
          <Button onClick={() => window.open(`${data.links.git}`, "_blank")}>
            <BsGithub />
            Github
          </Button>
          <Button
            onClick={() => window.open(`${data.links.linkedin}`, "_blank")}
          >
            <BsLinkedin />
            Linkedin
          </Button>
        </Component.DivButtons>
      </Component.AboutInfo>
    </Component.AboutSection>
  );
}
