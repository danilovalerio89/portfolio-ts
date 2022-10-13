import Img from "../../assets/new-foto.jpg";
import {
  AboutSection,
  AboutPresentation,
  DivPresentation,
  AboutInfo,
} from "./styles";

export function About() {
  return (
    <AboutSection>
      <AboutPresentation>
        <img src={Img} alt="" />

        <DivPresentation>
          <h3>Olá, tudo bom? Sou o</h3>
          <h1>Danilo</h1>
        </DivPresentation>
      </AboutPresentation>

      <AboutInfo>
        <div>
          <h2>DESENVOLVEDOR FULL STACK</h2>
          <h1>Desenvolvedor formado pela Kenzie Academy Brasil.</h1>
          <h1>Apaixonado por tecnologia, desafios e aprender coisas novas</h1>
        </div>
        <div>
          <button>GitHUb</button>
          <button>Linkedin</button>
        </div>
      </AboutInfo>
    </AboutSection>
  );
}
