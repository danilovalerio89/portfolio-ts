import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
`;
