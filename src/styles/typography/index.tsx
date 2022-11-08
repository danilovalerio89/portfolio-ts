import { HTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

export interface iTitle extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Typography({ children, tag }: iTitle) {
  return (
    <>
      {tag == "h1" && <S.H1>{children}</S.H1>}
      {tag == "h2" && <S.H2>{children}</S.H2>}
      {tag == "h3" && <S.H3>{children}</S.H3>}
      {tag == "h4" && <S.H4>{children}</S.H4>}
      {tag == "h5" && <h5>{children}</h5>}
      {tag == "h6" && <h6>{children}</h6>}
    </>
  );
}
