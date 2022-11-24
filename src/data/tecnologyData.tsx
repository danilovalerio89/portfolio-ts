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

interface TecnologyProps {
  name: string;
  img: string;
}

export const tecnologyData: TecnologyProps[] = [
  {
    name: "HTML",
    img: HTML,
  },
  {
    name: "CSS",
    img: CSS,
  },
  {
    name: "JavaScript",
    img: JS,
  },
  {
    name: "TypeScript",
    img: TS,
  },
  {
    name: "React",
    img: REACT,
  },
  {
    name: "Redux",
    img: REDUX,
  },
  {
    name: "NodeJS",
    img: NODEJS,
  },

  {
    name: "Docker",
    img: DOCKER,
  },
  {
    name: "PostgreSQL",
    img: POSTGRESQL,
  },
  {
    name: "Python",
    img: PYTHON,
  },
  {
    name: "Django",
    img: DJANGO,
  },
];
