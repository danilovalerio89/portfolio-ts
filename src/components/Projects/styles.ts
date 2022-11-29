import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 3rem 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  background-color: ${({ theme }) => theme.background.primary};
  transition: background-color 0.7s;
`;

export const BoxProjects = styled.div`
  max-width: 800px;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;

  @media (min-width: 768px) {
    display: none;
  }
`;
