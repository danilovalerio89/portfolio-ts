import { TecnologySection, UlTecnology, TenologyDiv } from "./styles";
import { tecnologyData } from "./TecnologyData";
import { CardTecnology } from "./CardTecnology";
import { Button } from "../Button";

export function Tecnology() {
  return (
    <TecnologySection>
      <TenologyDiv>
        <h1>Tecnologias</h1>
        <Button buttonStyle="solidBlack" buttonSize="xs">
          Solid Black
        </Button>
        <Button buttonStyle="outlineBlack" buttonSize="sm">
          Outline Black
        </Button>
        <Button buttonStyle="link" buttonSize="md">
          Link
        </Button>
        <Button buttonStyle="solidWhite" buttonSize="lg">
          Solid White
        </Button>
        <Button buttonStyle="outlineWhite" buttonSize="xs">
          Outline White
        </Button>
        {/* <UlTecnology>
          {tecnologyData.map((item, index) => (
            <CardTecnology key={index} name={item.name} img={item.img} />
          ))}
        </UlTecnology> */}
      </TenologyDiv>
    </TecnologySection>
  );
}
