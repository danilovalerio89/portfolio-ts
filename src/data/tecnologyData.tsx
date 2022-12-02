import HTML from "../assets/icons/html.svg";
import CSS from "../assets/icons/css.svg";
import JS from "../assets/icons/javascript.svg";
import TS from "../assets/icons/typescript.svg";
import REACT from "../assets/icons/react.svg";
import REDUX from "../assets/icons/redux.svg";
import NODEJS from "../assets/icons/nodejs.svg";
import DOCKER from "../assets/icons/docker.svg";
import POSTGRESQL from "../assets/icons/postgresql.svg";
import PYTHON from "../assets/icons/python.svg";
import DJANGO from "../assets/icons/django.svg";
import JEST from "../assets/icons/jest.png";
import EXPRESS from "../assets/icons/express.svg";

export interface iTecnology {
  name: string;
  img: string;
  link: string;
}

export const tecnologyData: iTecnology[] = [
  {
    name: "HTML",
    img: HTML,
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    name: "CSS",
    img: CSS,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    img: JS,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    img: TS,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    img: REACT,
    link: "https://pt-br.reactjs.org/",
  },
  {
    name: "Redux",
    img: REDUX,
    link: "https://redux.js.org/",
  },
  {
    name: "NodeJS",
    img: NODEJS,
    link: "https://nodejs.org/en/",
  },
  {
    name: "Express",
    img: EXPRESS,
    link: "https://expressjs.com/pt-br/",
  },
  {
    name: "Jest",
    img: JEST,
    link: "https://jestjs.io/",
  },
  {
    name: "Docker",
    img: DOCKER,
    link: "https://www.docker.com/",
  },
  {
    name: "PostgreSQL",
    img: POSTGRESQL,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Python",
    img: PYTHON,
    link: "https://www.python.org/",
  },
  {
    name: "Django",
    img: DJANGO,
    link: "https://www.djangoproject.com/",
  },
];
