import styled from "styled-components";

export const NavDiv = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
