import styled from "styled-components";

export const HeaderStyled = styled.header`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.background.default};
  justify-content: space-between;
  position: fixed;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid ${({ theme }) => theme.white};
`;

export const DivTitle = styled.div`
  margin: 9.5px auto;
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: transparent;
  align-items: center;
`;
