import { TecnologySection, UlTecnology, TenologyDiv } from "./styles";
import { tecnologyData } from "./TecnologyData";
import { CardTecnology } from "./CardTecnology";

export function Tecnology() {
  return (
    <TecnologySection>
      <TenologyDiv>
        <h3>Tecnologias</h3>
        <UlTecnology>
          {tecnologyData.map((item, index) => (
            <CardTecnology key={index} name={item.name} img={item.img} />
          ))}
        </UlTecnology>
      </TenologyDiv>
    </TecnologySection>
  );
}
