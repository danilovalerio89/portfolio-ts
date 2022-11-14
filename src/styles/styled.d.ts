import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    background: {
      default: string;
      primary: string;
      secondary: string;
    };
    text: string;
    black: string;
    white: string;
  }
}
