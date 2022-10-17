import { useIsOpen } from "../../../providers/isOpen";
import { SideBarStyled } from "./styles";
import { iData } from "../interfaces";

export function SideBar({ data }: iData) {
  const { isOpen } = useIsOpen();

  return (
    <SideBarStyled isOpen={isOpen}>
      <ul id="menu">
        {data.map((item, index) => (
          <li key={index}>
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </SideBarStyled>
  );
}
