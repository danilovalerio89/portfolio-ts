import styled from "styled-components";

export const Main = styled.main`
  padding: 75px 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-background-primary);
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.default};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100px;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100px;
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100px;
`;
