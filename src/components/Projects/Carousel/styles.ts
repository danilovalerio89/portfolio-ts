import styled from "styled-components";

export const Div = styled.div`
  height: 500px;
  width: 30%;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`;
