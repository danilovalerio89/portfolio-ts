import styled from "styled-components";

export const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const AboutPresentation = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  img {
    width: 55px;
    border-radius: 50%;
  }
`;

export const DivPresentation = styled.div`
  width: 100%;
  h3 {
    letter-spacing: 1.5px;
    font-weight: 400;
  }
  h1 {
    font-weight: 800;
    text-align: center;
    font-size: var(--fs-500);
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DivInfo = styled.div`
  h2 {
    font-size: var(--fs-200);
    font-weight: 500;
    margin: 0 0 25px 0;
    color: var(--clr-dark-200);
  }
  h3 {
    font-size: var(--fs-100);
    letter-spacing: 1.5px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const KenzieAcademyText = styled.b`
  font-family: var(--SecondaryFont);
  text-decoration: underline;
  text-underline-offset: 5px;
  text-transform: uppercase;
`;
export const AboutMeDivImg = styled.div``;
