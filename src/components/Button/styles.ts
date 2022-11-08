import styled, { css } from "styled-components";

interface iButton {
  isLink?: boolean;
  fullWidth?: boolean;
  buttonSize?: "xs" | "sm" | "md" | "lg" | "xl" | "link" | "linkNav";
  buttonStyle:
    | "solidBlack"
    | "solidWhite"
    | "outlineBlack"
    | "outlineWhite"
    | "link"
    | "linkNav";
}

export const Button = styled.button<iButton>`
  transition: 0.5s;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 10px;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) => {
    switch (props.buttonSize) {
      case "xs":
        return css`
          font-size: 0.825rem;
          padding: 0 1.2rem;
          height: 40px;
        `;
      case "sm":
        return css`
          font-size: 0.875rem;
          padding: 0 1.5rem;
          height: 46px;
        `;
      case "md":
        return css`
          font-size: 0.875rem;
          padding: 0 1.9rem;
          height: 52px;
        `;
      case "lg":
        return css`
          font-size: 0.9rem;
          padding: 0 2.2rem;
          height: 56px;
        `;
      case "xs":
        return css`
          font-size: 1rem;
          padding: 0 2.4rem;
          height: 62px;
        `;
      case "linkNav":
        return css`
          font-size: 1.2rem;
          padding: 0.8rem 0.3rem;
        `;
      case "link":
        return css`
          font-size: 1.2rem;
          padding: 0.8rem 0rem;
        `;
    }
  }}

  ${(props) => {
    switch (props.buttonStyle) {
      case "solidBlack":
        return css`
          background-color: var(--clr-dark-500);
          color: var(--clr-light-100);
          &:hover {
            background-color: var(--clr-light-100);
            color: var(--clr-dark-500);
          }
        `;
      case "outlineBlack":
        return css`
          background-color: var(--clr-dark-500);
          color: var(--clr-light-100);
          border: 2px solid var(--clr-light-100);
          &:hover {
            background-color: var(--clr-light-100);
            color: var(--clr-dark-500);
            border: 2px solid var(--clr-dark-500);
          }
        `;
      case "solidWhite":
        return css`
          background-color: var(--clr-light-100);
          color: var(--clr-dark-500);
          &:hover {
            background-color: var(--clr-dark-500);
            color: var(--clr-light-100);
          }
        `;
      case "outlineWhite":
        return css`
          background-color: var(--clr-light-100);
          color: var(--clr-dark-500);
          border: 2px solid var(--clr-dark-500);
          &:hover {
            background-color: var(--clr-dark-500);
            color: var(--clr-light-100);
            border: 2px solid var(--clr-light-100);
          }
        `;
      case "link":
        return css`
          position: relative;
          background-color: transparent;
          color: var(--clr-light-100);
        `;
      case "linkNav":
        return css`
          position: relative;
          background-color: transparent;
          color: var(--clr-light-100);
          &::after {
            content: "";
            position: absolute;
            bottom: 5px;
            left: 0px;
            width: 100%;
            height: 0.1rem;
            background-color: var(--clr-light-100);
            opacity: 0;
            transition: opacity 300ms, transform 300ms;
          }
          &::after {
            opacity: 1;
            transform: scale(0);
            transform-origin: center;
          }
          &:hover::after {
            transform: scale(1.1);
          }
        `;
    }
  }}
`;
