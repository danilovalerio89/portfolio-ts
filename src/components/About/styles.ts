import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    font-weight: 400;
    line-height: 23px;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  h1 {
    font-size: 46px;
  }
  h3 {
    font-size: 20px;
    color: var(--clr-dark-200);
  }
  p {
    font-weight: 600;
    font-size: 22px;
  }
`;

export const DivButtons = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-around;
`;
