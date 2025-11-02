/**
 * styles
 * GlobalStyle.ts
**/

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url("/font/PretendardVariable.woff2") format("woff2-variations");
    font-weight: 45 920;
    font-display: swap;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: #e5e5e5;
    font-size: 1.4rem;
    line-height: 1.4;
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
    background-color: #141414;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;