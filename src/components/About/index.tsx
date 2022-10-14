import Img from "../../assets/new-foto.jpg";
import { Button } from "../Button";
import {
  AboutSection,
  AboutPresentation,
  DivPresentation,
  AboutInfo,
  DivInfo,
  DivButtons,
} from "./styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export function About() {
  return (
    <AboutSection>
      <AboutPresentation>
        <img src={Img} alt="Profile Photo" />

        <DivPresentation>
          <h3>Olá, tudo bom? Sou o</h3>
          <h1>Danilo</h1>
        </DivPresentation>
      </AboutPresentation>

      <AboutInfo>
        <DivInfo>
          <h2>DESENVOLVEDOR FULL STACK</h2>
          <h3>
            Desenvolvedor formado pela Kenzie Academy Brasil. Apaixonado por
            tecnologia, desafios e aprender coisas novas.
          </h3>
        </DivInfo>
        <DivButtons>
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/danilo-valerio/",
                "_blank"
              )
            }
          >
            <BsGithub />
            Github
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/danilo-valerio/",
                "_blank"
              )
            }
          >
            <BsLinkedin />
            Linkedin
          </Button>
        </DivButtons>
      </AboutInfo>
    </AboutSection>
  );
}
