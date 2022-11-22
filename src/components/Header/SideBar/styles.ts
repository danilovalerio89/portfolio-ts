import styled from "styled-components";

interface IsOpenProps {
  isOpen: boolean;
}

export const Div = styled.div<IsOpenProps>`
  position: fixed;
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.background.default};
  border-radius: 0 0 0 5px;
  flex-direction: column;
  padding: 0 25px;
  right: ${(props) => (props.isOpen ? "0%" : "-80%")};
  transition: 0.7s;
  border-top: 1px solid ${({ theme }) => theme.white};
  border-left: 1px solid ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.white};
  @media (min-width: 768px) {
    display: none;
  }
`;
