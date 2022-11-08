import styled from "styled-components";

export const HeaderStyled = styled.header`
  color: var(--clr-light-100);
  justify-content: space-between;
  position: fixed;
  height: 60px;
  width: 100vw;
  border-bottom: var(--border-thin) solid var(--clr-light-100);
  background-color: var(--clr-dark-500);
`;

export const DivTitle = styled.div`
  margin: 6px auto;
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: var(--clr-dark-500);
  b {
    background-color: var(--clr-dark-500);
  }
`;
