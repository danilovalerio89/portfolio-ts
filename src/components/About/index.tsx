import Img from "../../assets/new-foto.jpg";
import { Button } from "../Button";
import * as Component from "./styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export function About() {
  return (
    <Component.AboutSection>
      <Component.AboutPresentation>
        <img src={Img} alt="Profile Photo" />
        <Component.DivPresentation>
          <h3>Olá, tudo bom? Sou o</h3>
          <h1>Danilo</h1>
        </Component.DivPresentation>
      </Component.AboutPresentation>

      <Component.AboutInfo>
        <Component.DivInfo>
          <h2>DESENVOLVEDOR FULL STACK</h2>
          <h3>
            Desenvolvedor formado pela Kenzie Academy Brasil. Apaixonado por
            tecnologia, desafios e aprender coisas novas.
          </h3>
        </Component.DivInfo>
        <Component.DivButtons>
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
        </Component.DivButtons>
      </Component.AboutInfo>
    </Component.AboutSection>
  );
}
