import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 3rem 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: ${({ theme }) => theme.background.primary};
  transition: background-color 0.7s;
`;

export const BoxProjects = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
`;
