import * as S from "./styles";
import { Button } from "../../Button";
import { FiUser } from "react-icons/fi";
import { RiComputerLine, RiFile3Line, RiMailLine } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

export function NavBar() {
  return (
    <S.Nav>
      <S.Ul>
        <Button buttonStyle="linkNav" buttonSize="linkNav">
          <FiUser />
          <HashLink smooth to="/#about">
            Sobre
          </HashLink>
        </Button>
        <Button buttonStyle="linkNav" buttonSize="linkNav">
          <RiComputerLine />
          <HashLink smooth to="/#tecnology">
            Tecnologias
          </HashLink>
        </Button>
        <Button buttonStyle="linkNav" buttonSize="linkNav">
          <RiFile3Line />
          <HashLink smooth to="/#projects">
            Projetos
          </HashLink>
        </Button>
        <Button buttonStyle="linkNav" buttonSize="linkNav">
          <RiMailLine />
          <HashLink smooth to="/#contacts">
            Contatos
          </HashLink>
        </Button>
      </S.Ul>
    </S.Nav>
  );
}
