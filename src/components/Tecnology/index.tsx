import { TecnologySection, UlTecnology, TenologyDiv } from "./styles";
import { tecnologyData } from "./TecnologyData";
import { CardTecnology } from "./CardTecnology";

export function Tecnology() {
  return (
    <TecnologySection>
      <TenologyDiv>
        <h1>Tecnologias</h1>
        <UlTecnology>
          {tecnologyData.map((item, index) => (
            <CardTecnology key={index} name={item.name} img={item.img} />
          ))}
        </UlTecnology>
      </TenologyDiv>
    </TecnologySection>
  );
}
