import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,700;0,900;1,200;1,300;1,600;1,700&display=swap");

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #d5e1ef;
    font-family: "Source Sans Pro", sans-serif;
  }
`;

export const StyledButton = styled.button`
  border: #f3f3f3;
  background-color: #fff;
  color: #345234;

  &:hover {
    font-weight: 600;
  }
`;
