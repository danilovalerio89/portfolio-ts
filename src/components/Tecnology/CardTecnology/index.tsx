import { Typography } from "../../../styles/typography";

interface CardTecnologyProps {
  name: string;
  img: string;
}

export function CardTecnology({ name, img }: CardTecnologyProps): JSX.Element {
  return (
    <li>
      <Typography tag={"h4"}>{name}</Typography>
      <img src={img} alt={name} />
    </li>
  );
}
