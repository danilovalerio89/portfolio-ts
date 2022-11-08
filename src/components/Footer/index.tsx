import { Typography } from "../../styles/typography";
import * as S from "./styles";

export function Footer() {
  return (
    <>
      <S.Footer>
        <S.Contacts></S.Contacts>
        <Typography tag={"h1"} fS={2}>
          &lt;<b>D</b>/&gt;
        </Typography>
      </S.Footer>
    </>
  );
}
