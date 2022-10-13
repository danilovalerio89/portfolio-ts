import { useIsOpen } from "../../providers/isOpen";
import { SideBarStyled } from "./styles";

export function SideBar() {
  const { isOpen } = useIsOpen();

  return (
    <SideBarStyled isOpen={isOpen}>
      <ul id="menu">
        <li>Sobre</li>
        <li>Tecnologias</li>
        <li>Projetos</li>
        <li>Contatos</li>
      </ul>
    </SideBarStyled>
  );
}
