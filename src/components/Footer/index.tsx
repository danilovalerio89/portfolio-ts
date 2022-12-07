import * as S from "./styles";
import { Button } from "../Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ThemeTitle } from "../../styles/typography";
import { iUser } from "../../data/userData";

type iData = {
  data: iUser;
};

export function Footer({ data }: iData) {
  return (
    <>
      <S.Footer id="contacts">
        <S.Contacts>
          <Button
            buttonStyle="link"
            buttonSize="link"
            onClick={() => window.open(`${data.links.git}`, "_blank")}
          >
            <BsGithub size={25} />
            GitHub
          </Button>
          <Button
            buttonStyle="link"
            buttonSize="link"
            onClick={() => window.open(`${data.links.linkedin}`, "_blank")}
          >
            <BsLinkedin size={25} />
            LinkedIn
          </Button>
        </S.Contacts>
        <ThemeTitle tag="h2" fontSize="xl">
          &lt;/<b>D</b>&gt;
        </ThemeTitle>
      </S.Footer>
    </>
  );
}
