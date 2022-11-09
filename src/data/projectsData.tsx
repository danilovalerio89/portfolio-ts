import CALCULADORA from "../assets/projectsImg/calculadora.png";
import NUKENZIE from "../assets/projectsImg/nukenzie.png";
import KBURGUER from "../assets/projectsImg/kburguer.png";
import KHUB from "../assets/projectsImg/khub.png";

interface iProjects {
  name: string;
  image: string;
  vercelLink: string;
  githubLink: string;
}

export const projects: iProjects[] = [
  {
    name: "Calculadora Antecipação",
    image: CALCULADORA,
    vercelLink: "https://calculadora-antecipacao.vercel.app/",
    githubLink: "https://github.com/danilovalerio89/calculadora-antecipacao",
  },
  {
    name: "Nu Kenzie",
    image: NUKENZIE,
    vercelLink: "https://nu-kenzie-alpha.vercel.app/",
    githubLink: "https://github.com/danilovalerio89/Nu-Kenzie",
  },
  {
    name: "Kenzie Hub",
    image: KHUB,
    vercelLink: "https://kenzie-hub-jet.vercel.app/",
    githubLink: "https://github.com/danilovalerio89/Kenzie-Hub",
  },
  {
    name: "Kenzie Burguer",
    image: KBURGUER,
    vercelLink: "https://kenzie-burguer-one.vercel.app/",
    githubLink: "https://github.com/danilovalerio89/Kenzie-Burguer",
  },
];
