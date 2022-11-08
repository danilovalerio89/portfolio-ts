import styled from "styled-components";

interface IsOpenProps {
  isOpen: boolean;
}

export const Div = styled.div<IsOpenProps>`
  position: fixed;
  display: flex;
  align-items: flex-start;
  background-color: var(--clr-dark-500);
  border-radius: 0 0 0 5px;
  flex-direction: column;
  padding: 0 25px;
  right: ${(props) => (props.isOpen ? "0%" : "-60%")};
  transition: 0.7s;
  border-top: var(--border-thin) solid var(--clr-light-100);
  @media (min-width: 768px) {
    display: none;
  }
`;
