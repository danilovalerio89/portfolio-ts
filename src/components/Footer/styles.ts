import styled from "styled-components";

export const Footer = styled.footer`
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: var(--border-thin) solid var(--clr-light-100);
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/* background-color: ${({ theme }) => theme.dark?.background.default}; */
