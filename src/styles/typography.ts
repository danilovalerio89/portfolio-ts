import styled, { css } from "styled-components";
import { BaseBody, BaseTitle } from "./components/typography";

export const ThemeTitle = styled(BaseTitle)`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "xs":
        return css`
          font-size: 1.266rem;
          @media (min-width: 768px) {
            font-size: 1.44rem;
          }
          @media (min-width: 1024px) {
            font-size: 1.563rem;
          }
        `;
      case "sm":
        return css`
          font-size: 1.424rem;
          @media (min-width: 768px) {
            font-size: 1.728rem;
          }
          @media (min-width: 1024px) {
            font-size: 1.953rem;
          }
        `;
      case "md":
        return css`
          font-size: 1.602rem;
          @media (min-width: 768px) {
            font-size: 2.074rem;
          }
          @media (min-width: 1024px) {
            font-size: 2.441rem;
          }
        `;
      case "lg":
        return css`
          font-size: 1.802rem;
          @media (min-width: 768px) {
            font-size: 2.488rem;
          }
          @media (min-width: 1024px) {
            font-size: 3.052rem;
          }
        `;
      case "xl":
        return css`
          font-size: 2.027rem;
          @media (min-width: 768px) {
            font-size: 2.986rem;
          }
          @media (min-width: 1024px) {
            font-size: 3.815rem;
          }
        `;
    }
  }}
`;

export const ThemeBody = styled(BaseBody)`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "sm":
        return css`
          font-size: 0.833rem;
        `;
      case "md":
        return css`
          font-size: 1rem;
        `;
      case "lg":
        return css`
          font-size: 1.2rem;
        `;
    }
  }}
`;
