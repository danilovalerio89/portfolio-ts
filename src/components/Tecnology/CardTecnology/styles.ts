import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  figure {
    width: 85px;
    height: 95px;
    display: flex;
    justify-content: center;
  }

  img {
    width: 80%;
    display: flex;
    align-items: center;
    &:hover {
      width: 100%;
    }
    transition: 0.5s;
  }
`;
