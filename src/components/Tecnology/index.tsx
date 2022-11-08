import { TecnologySection, UlTecnology, TenologyDiv } from "./styles";
import { tecnologyData } from "./TecnologyData";
import { CardTecnology } from "./CardTecnology";
import { Typography } from "../../styles/typography";

export function Tecnology() {
  return (
    <TecnologySection>
      <TenologyDiv>
        <Typography tag={"h3"}>Tecnologias</Typography>
        <UlTecnology>
          {tecnologyData.map((item, index) => (
            <CardTecnology key={index} name={item.name} img={item.img} />
          ))}
        </UlTecnology>
      </TenologyDiv>
    </TecnologySection>
  );
}
