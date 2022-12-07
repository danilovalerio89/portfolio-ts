import styled from "styled-components";

export const Button = styled.button`
  border-radius: 30%;
  height: 50px;
  width: 50px;
  border: 2px solid ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.background.default};
  transition: background-color 0.7s;
`;
