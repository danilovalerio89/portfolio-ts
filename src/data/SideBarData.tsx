import { FiUser } from "react-icons/fi";
import { RiComputerLine, RiFile3Line, RiMailLine } from "react-icons/ri";

import { iSideBarData } from "../components/Header/interfaces";

export const SideBarData: iSideBarData[] = [
  { name: "Sobre", icon: <FiUser /> },
  { name: "Tecnologias", icon: <RiComputerLine /> },
  { name: "Projetos", icon: <RiFile3Line /> },
  { name: "Contatos", icon: <RiMailLine /> },
];
