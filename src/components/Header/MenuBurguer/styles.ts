import styled from "styled-components";

interface SpanProps {
  check: boolean;
}

export const LabelBox = styled.label`
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.default};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SpanBase = styled.span<SpanProps>`
  position: absolute;
  width: 25px;
  height: 2px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 3px;
  transition: transform 0.25s, opacity 0.35s;
`;

export const SpanTop = styled(SpanBase)`
  transform: translateY(-7px);
  transform: ${(props) => (props.check ? `rotate(45deg)` : null)};
`;

export const SpanMiddle = styled(SpanBase)`
  transform: ${(props) => (props.check ? `translateX(16px)` : null)};
  opacity: ${(props) => (props.check ? `0` : "1")};
`;

export const SpanBottom = styled(SpanBase)`
  transform: translateY(7px);
  transform: ${(props) => (props.check ? `rotate(-45deg)` : null)};
`;

export const InputBurguer = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;
