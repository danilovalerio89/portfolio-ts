import * as S from "./styles";
import { useIsOpen } from "../../../providers/isOpen";
import { Button } from "../../Button";
import { FiUser } from "react-icons/fi";
import { RiComputerLine, RiFile3Line, RiMailLine } from "react-icons/ri";

export function SideBar() {
  const { isOpen } = useIsOpen();

  return (
    <S.Div isOpen={isOpen}>
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
    </S.Div>
  );
}
