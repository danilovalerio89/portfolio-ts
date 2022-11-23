import IMG from "../assets/new-foto.jpg";

export interface iPerson {
  name: string;
  img: string;
  stack: string;
  about: string;
  city: string;
  country: string;
  text: string;
  links: {
    git: string;
    linkedin: string;
  };
}

export interface iInfos {
  data: iPerson;
}

export const Infos: iPerson = {
  name: "Danilo",
  img: IMG,
  stack: "DESENVOLVEDOR FULL STACK",
  about: "Desenvolvedor Web Full Stack",
  city: "Curitiba-PR",
  country: "Brasil",
  text: "Desenvolvedor Full Stack pela KENZIE ACADEMY BRASIL. Apaixonado por programação e novos desafios. A constante evolução e a possibilidade de resolver problemas de várias maneiras, são coisas que me fazem me apaixonar cada vez mais pela área.",
  links: {
    git: "https://github.com/danilovalerio89",
    linkedin: "https://www.linkedin.com/in/danilo-valerio/",
  },
};
