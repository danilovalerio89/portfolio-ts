import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 24px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${({ theme }) => theme.background.primary};
  transition: background-color 0.7s;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const DivAbout = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;

  gap: 24px;
  @media (min-width: 768px) {
    width: 40%;
    border-right: 1px solid ${({ theme }) => theme.white};
  }
`;

export const DivTitle = styled.div`
  display: flex;
  span {
    font-size: 4rem;
    font-weight: 600;
    cursor: default;
  }
`;

export const DivText = styled.div`
  max-width: 420px;
  p {
    line-height: 24px;
  }
`;

export const DivButtons = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 16px 0;
  max-width: 320px;
`;
