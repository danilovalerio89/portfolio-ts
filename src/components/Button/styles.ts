import styled, { css } from "styled-components";
import { iButton } from "../Button";

export const Button = styled.button<iButton>`
  transition: 0.5s;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  white-space: nowrap;
  gap: 10px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: ${fullWidth}%;
    `}

  ${(props) => {
    switch (props.buttonSize) {
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
          background-color: ${({ theme }) => theme.black};
          color: ${({ theme }) => theme.white};
          &:hover {
            background-color: ${({ theme }) => theme.white};
            color: ${({ theme }) => theme.black};
          }
        `;
      case "solidWhite":
        return css`
          background-color: ${({ theme }) => theme.white};
          color: ${({ theme }) => theme.black};
          &:hover {
            background-color: ${({ theme }) => theme.black};
            color: ${({ theme }) => theme.white};
          }
        `;
      case "solidDefault":
        return css`
          background-color: ${({ theme }) => theme.background.default};
          color: ${({ theme }) => theme.white};
          &:hover {
            background-color: ${({ theme }) => theme.background.primary};
          }
        `;
      case "solidPrimary":
        return css`
          background-color: ${({ theme }) => theme.background.primary};
          color: ${({ theme }) => theme.white};
          &:hover {
            background-color: ${({ theme }) => theme.background.secondary};
          }
        `;
      case "solidSecondary":
        return css`
          background-color: ${({ theme }) => theme.background.secondary};
          color: ${({ theme }) => theme.white};
          &:hover {
            background-color: ${({ theme }) => theme.background.primary};
          }
        `;
      case "outlineBlack":
        return css`
          background-color: ${({ theme }) => theme.black};
          border: 2px solid ${({ theme }) => theme.white};
          color: ${({ theme }) => theme.white};
          &:hover {
            background-color: ${({ theme }) => theme.white};
            border: 2px solid ${({ theme }) => theme.black};
            color: ${({ theme }) => theme.black};
          }
        `;
      case "outlineWhite":
        return css`
          background-color: ${({ theme }) => theme.white};
          border: 2px solid ${({ theme }) => theme.black};
          color: ${({ theme }) => theme.black};
          &:hover {
            background-color: ${({ theme }) => theme.black};
            border: 2px solid ${({ theme }) => theme.white};
            color: ${({ theme }) => theme.white};
          }
        `;
      case "outlineDefault":
        return css`
          background-color: ${({ theme }) => theme.background.default};
          border: 2px solid ${({ theme }) => theme.white};
          color: ${({ theme }) => theme.white};
          &:hover {
            background-color: ${({ theme }) => theme.background.primary};
            border: 2px solid ${({ theme }) => theme.black};
          }
        `;
      case "outlinePrimary":
        return css`
          background-color: ${({ theme }) => theme.background.primary};
          border: 2px solid ${({ theme }) => theme.white};
          color: ${({ theme }) => theme.white};
          &:hover {
            background-color: ${({ theme }) => theme.background.secondary};
            border: 2px solid ${({ theme }) => theme.black};
          }
        `;
      case "outlineSecondary":
        return css`
          background-color: ${({ theme }) => theme.background.secondary};
          border: 2px solid ${({ theme }) => theme.white};
          color: ${({ theme }) => theme.white};
          &:hover {
            background-color: ${({ theme }) => theme.background.default};
            border: 2px solid ${({ theme }) => theme.black};
          }
        `;
      case "link":
        return css`
          position: relative;
          background-color: transparent;
          color: ${({ theme }) => theme.white};
        `;
      case "linkNav":
        return css`
          position: relative;
          background-color: transparent;
          color: ${({ theme }) => theme.white};
          &::after {
            content: "";
            position: absolute;
            bottom: 5px;
            left: 0px;
            width: 100%;
            height: 0.1rem;
            background-color: ${({ theme }) => theme.white};
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
