interface CardTecnologyProps {
  name: string;
  img: string;
}

export function CardTecnology({ name, img }: CardTecnologyProps): JSX.Element {
  return (
    <li>
      <p>{name}</p>
      <img src={img} alt={name} />
    </li>
  );
}
