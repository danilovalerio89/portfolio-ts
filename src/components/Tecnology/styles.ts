import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 3rem 5%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: ${({ theme }) => theme.background.secondary};
  transition: background-color 0.7s;
`;

export const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;
