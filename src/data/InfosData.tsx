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
  text: "Desenvolvedor formado pela Kenzie Academy Brasil. Apaixonado por tecnologia, desafios e aprender coisas novas.",
  links: {
    git: "https://github.com/danilovalerio89",
    linkedin: "https://www.linkedin.com/in/danilo-valerio/",
  },
};
