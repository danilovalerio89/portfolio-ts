import * as S from "./styles";
import { Button } from "../Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { iInfos } from "../../data/InfosData";
export function Footer({ data }: iInfos) {
  return (
    <>
      <S.Footer>
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
        <h1>
          &lt;/<b>D</b>&gt;
        </h1>
      </S.Footer>
    </>
  );
}