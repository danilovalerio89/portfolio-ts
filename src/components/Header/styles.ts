import styled from "styled-components";

export const HeaderStyled = styled.header`
  color: var(--clr-light-100);
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  border-bottom: var(--border-thin) solid var(--clr-light-100);
  background-color: var(--clr-dark-500);
`;

export const DivTitle = styled.div`
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: var(--clr-dark-500);
  h1 {
    font-size: var(--fs-500);
    font-weight: 300;
    background-color: var(--clr-dark-500);
  }
  b {
    background-color: var(--clr-dark-500);
  }
`;
