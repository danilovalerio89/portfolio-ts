import styled from "styled-components";

export const Main = styled.main`
  padding: 75px 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  transition: background-color 0.7s;
`;

export const DivTheme = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
`;
