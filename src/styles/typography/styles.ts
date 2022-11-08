import styled from "styled-components";

export const LOGO = styled.h1`
  font-size: 39.5px;
`;

export const H1 = styled.h1`
  font-size: var(--fs-600);
  font-weight: 600;
  @media (min-width: 490px) {
    font-size: var(--fs-700);
  }
  @media (min-width: 900px) {
    font-size: var(--fs-800);
  }
  @media (min-width: 1024px) {
    font-size: var(--fs-900);
  }
`;

export const H2 = styled.h2`
  font-size: var(--fs-200);
  font-weight: 600;
  color: var(--clr-dark-200);
  @media (min-width: 490px) {
    font-size: var(--fs-300);
  }
  @media (min-width: 900px) {
    font-size: var(--fs-400);
  }
`;

export const H3 = styled.h3`
  font-size: var(--fs-300);
  font-weight: 600;
  color: var(--clr-light-100);
  @media (min-width: 490px) {
    font-size: var(--fs-400);
  }
  @media (min-width: 900px) {
    font-size: var(--fs-500);
  }
`;

export const H4 = styled.h4`
  font-size: var(--fs-100);
  font-weight: 300;
  color: var(--clr-dark-500);
`;
