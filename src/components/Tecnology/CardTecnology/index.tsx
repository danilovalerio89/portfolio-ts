import * as S from "./styles";

interface iCard {
  name: string;
  img: string;
}

export function CardTecnology({ name, img }: iCard) {
  return (
    <S.Li>
      <p>{name}</p>
      <figure>
        <img src={img} alt={name} />
      </figure>
    </S.Li>
  );
}
