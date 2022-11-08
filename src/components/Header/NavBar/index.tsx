import * as S from "./styles";
import { Button } from "../../Button";
import { FiUser } from "react-icons/fi";
import { RiComputerLine, RiFile3Line, RiMailLine } from "react-icons/ri";

export function NavBar() {
  return (
    <S.Nav>
      <S.Ul>
        <Button buttonStyle="linkNav" buttonSize="linkNav">
          <FiUser /> Sobre
        </Button>
        <Button buttonStyle="linkNav" buttonSize="linkNav">
          <RiComputerLine /> Tecnologias
        </Button>
        <Button buttonStyle="linkNav" buttonSize="linkNav">
          <RiFile3Line /> Projetos
        </Button>
        <Button buttonStyle="linkNav" buttonSize="linkNav">
          <RiMailLine /> Contatos
        </Button>
      </S.Ul>
    </S.Nav>
  );
}
