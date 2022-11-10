import CALCULADORA from "../assets/projectsImg/calculadora.png";
import NUKENZIE from "../assets/projectsImg/nukenzie.png";
import KBURGUER from "../assets/projectsImg/kburguer.png";
import KHUB from "../assets/projectsImg/khub.png";

interface iProjects {
  name: string;
  image: string;
  vercelLink: string;
  githubLink: string;
  description: string;
  tecs: string;
}

export const projects: iProjects[] = [
  {
    name: "Calc. Antecipação",
    image: CALCULADORA,
    description:
      "Calculadora para antecipação de crédito, onde é possível verificar o valor que vai receber em determinados dias, sendo personalizado os dias que deseja verificar.",
    tecs: "JavaScript, React, Yup, Axios, Context e Styled-Components.",
    vercelLink: "https://calculadora-antecipacao.vercel.app/",
    githubLink: "https://github.com/danilovalerio89/calculadora-antecipacao",
  },
  {
    name: "Nu Kenzie",
    image: NUKENZIE,
    description:
      "Nu Kenzie, onde você pode informar valores de entrada e saída e verificar o saldo final para acompanhar suas finanças.",
    vercelLink: "https://nu-kenzie-alpha.vercel.app/",
    tecs: "JavaScript, React e CSS.",
    githubLink: "https://github.com/danilovalerio89/Nu-Kenzie",
  },
  {
    name: "Kenzie Hub",
    image: KHUB,
    description:
      "Pequena aplicação onde é possível cadastrar um usuário e criar e editar tecnologias para o mesmo.",
    tecs: "JavaScript, React, Yup, Axios, Redux e Styled-Components",
    vercelLink: "https://kenzie-hub-jet.vercel.app/",
    githubLink: "https://github.com/danilovalerio89/Kenzie-Hub",
  },
  {
    name: "Kenzie Burguer",
    image: KBURGUER,
    description:
      "Pequeno e-commerce onde é possível adicionar produtos no carrinho e efetuar buscas.",
    tecs: "JavaScript, React e CSS.",
    vercelLink: "https://kenzie-burguer-one.vercel.app/",
    githubLink: "https://github.com/danilovalerio89/Kenzie-Burguer",
  },
];
