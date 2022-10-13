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

export const KenzieAcademyText = styled.b`
  font-family: var(--SecondaryFont);
  text-decoration: underline;
  text-underline-offset: 5px;
  text-transform: uppercase;
`;
export const AboutMeDivImg = styled.div``;
