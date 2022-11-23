import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.background.default};
  transition: background-color 0.7s;
`;
