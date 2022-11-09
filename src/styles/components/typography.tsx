import { HTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

export interface iTitle {
  children: ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  fontSize: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface iParagraph {
  children: ReactNode;
  className?: string;
  fontSize: "sm" | "md" | "lg";
}

export function BaseTitle({ children, className, tag }: iTitle) {
  return (
    <>
      {tag == "h1" && <h1 className={className}>{children}</h1>}
      {tag == "h2" && <h2 className={className}>{children}</h2>}
      {tag == "h3" && <h3 className={className}>{children}</h3>}
      {tag == "h4" && <h4 className={className}>{children}</h4>}
      {tag == "h5" && <h5 className={className}>{children}</h5>}
    </>
  );
}

export function BaseBody({ children, className }: iParagraph) {
  return <>{<p className={className}>{children}</p>}</>;
}
