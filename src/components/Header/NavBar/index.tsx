import { NavDiv } from "./styles";
import { iData } from "../interfaces";

export function NavBar({ data }: iData): JSX.Element {
  return (
    <NavDiv>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </NavDiv>
  );
}
