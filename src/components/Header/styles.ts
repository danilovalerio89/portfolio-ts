import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  padding: 0 5%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.background.default};
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid ${({ theme }) => theme.white};
  transition: background-color 0.7s;
  z-index: 99;
`;

export const DivTitle = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
`;
