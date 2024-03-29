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
    align-items: center;
  }

  img {
    width: 80%;
    height: fit-content;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover {
      width: 100%;
    }
    transition: 0.5s;
  }

  p {
    cursor: default;
  }
`;
