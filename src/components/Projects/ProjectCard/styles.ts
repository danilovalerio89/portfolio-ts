import styled from "styled-components";

export const Div = styled.div`
  width: 300px;
  height: 485px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 0 35px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.background.primary};
  cursor: pointer;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 240px;

  img {
    object-fit: fill !important;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  flex-grow: 1;
`;

export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`;
