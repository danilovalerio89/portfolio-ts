import styled from "styled-components";

export const Div = styled.div`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 0 35px 0;
  border-radius: 5px;
  border: 1px solid white;
`;

export const Figure = styled.figure`
  height: 240px;

  img {
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
