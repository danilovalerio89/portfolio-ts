import * as S from "./styles";
import { tecnologyData } from "../../data/tecnologyData";
import { CardTecnology } from "./CardTecnology";
import { ThemeTitle } from "../../styles/typography";

export function Tecnology() {
  return (
    <S.Section>
      <ThemeTitle fontSize="md" tag="h3">
        Tecnologias
      </ThemeTitle>
      <S.BoxCard>
        <S.Ul>
          {tecnologyData.map((item, index) => (
            <CardTecnology key={index} name={item.name} img={item.img} />
          ))}
        </S.Ul>
      </S.BoxCard>
    </S.Section>
  );
}
