import styled, { css } from "styled-components";
import { colors } from ".";
import { iTypography } from "../typography";

export const BaseTypo = styled.h1<iTypography>`
  font-size: ${(props) =>
    props.fS == 1
      ? css`var(--fs-400)`
      : props.fS == 2
      ? css`var(--fs-500)`
      : css`var(--fs-600)`};
  font-weight: ${(props) => (props.fW == 1 ? 300 : props.fW == 2 ? 500 : 800)};
  letter-spacing: ${(props) =>
    props.lS == 1 ? "0px" : props.lS == 2 ? "1px" : "2px"};
  color: ${(props) =>
    props.clr == "black"
      ? colors.black
      : props.clr == "white"
      ? colors.white
      : props.clr == "grey"
      ? colors.grey
      : colors.blue};
`;

export const H1 = styled(BaseTypo)``;

export const H2 = styled(BaseTypo)`
  font-size: ${(props) =>
    props.fS == 1
      ? css`var(--fs-300)`
      : props.fS == 2
      ? css`var(--fs-400)`
      : css`var(--fs-500)`};
`;

export const H3 = styled(BaseTypo)`
  font-size: ${(props) =>
    props.fS == 1
      ? css`var(--fs-200)`
      : props.fS == 2
      ? css`var(--fs-300)`
      : css`var(--fs-400)`};
`;
export const H4 = styled(BaseTypo)`
  font-size: ${(props) =>
    props.fS == 1
      ? css`var(--fs-100)`
      : props.fS == 2
      ? css`var(--fs-200)`
      : css`var(--fs-300)`};
`;

export const H5 = styled(BaseTypo)`
  font-size: ${(props) =>
    props.fS == 1
      ? css`var(--fs-100)`
      : props.fS == 2
      ? css`var(--fs-100)`
      : css`var(--fs-200)`};
`;

export const P = styled(H1)`
  font-size: var(--fs-100);
`;
