import styled, { css, keyframes } from "styled-components";

interface IsOpenProps {
  isOpen: boolean;
}
export const appearFromRight = keyframes`
  from{
      opacity:1;
      margin: 0px 0px 0px 0px;
  }
  to{
      opacity:1;
      margin: 0px 0px 0px -200px;
  }
  `;

export const appearFromLeft = keyframes`
  from{
      opacity:1;
      margin: 0px 0px 0px -200px;
  
  }
  to{
       opacity:1;
       margin: 0px 0px 0px 0px;
  }`;

export const SideBarStyled = styled.div<IsOpenProps>`
  #menu {
    position: absolute;
    width: 100vw;
    height: 35vh;
    border-top: var(--border-thin) solid var(--clr-light-100);
    margin: ${(props) =>
      props.isOpen ? "0px 0px 0px -200px" : "0px 0px 0px 0px"};
    transform: translate(100%, 0);
    transition: transform 0.5s ease-in-out;
    animation: ${(props) =>
      props.isOpen
        ? css`
            ${appearFromRight} 0.5s ease-in-out
          `
        : css`
            ${appearFromLeft} 0.5s ease-in-out
          `};
  }

  #menu li {
    background-color: var(--clr-background-secondary);
    padding: 10px 30px;
    font-size: 22px;
    color: var(--clr-light-100);
    transition: 0.2s;
    color: var(--clr-light-100);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.2s;
    :hover {
      color: var(--clr-dark-500);
    }
  }

  li {
    color: var(--clr-light-100);
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 300ms;
    :hover {
      color: var(--clr-dark-500);
      cursor: pointer;
    }
  }
`;
