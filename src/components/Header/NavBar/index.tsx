import * as S from "./styles";
import { Button } from "../../Button";
import { FiUser } from "react-icons/fi";
import { RiComputerLine, RiFile3Line, RiMailLine } from "react-icons/ri";

export function NavBar() {
  return (
    <S.Nav>
      <S.Ul>
        <Button buttonStyle="link" buttonSize="link">
          <FiUser /> Sobre
        </Button>
        <Button buttonStyle="link" buttonSize="link">
          <RiComputerLine /> Tecnologias
        </Button>
        <Button buttonStyle="link" buttonSize="link">
          <RiFile3Line /> Projetos
        </Button>
        <Button buttonStyle="link" buttonSize="link">
          <RiMailLine /> Contatos
        </Button>
      </S.Ul>
    </S.Nav>
  );
}
