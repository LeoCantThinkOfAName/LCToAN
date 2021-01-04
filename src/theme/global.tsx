import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Lato", "Noto Sans TC", sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0px;
  }
  html,
  body,
  #___gatsby {
    height: 100%;
    line-height: 1.5em;
  }
  div {
    &#gatsby-focus-wrapper {
      height: 100%;
    }
  }
  .my-masonry-grid {
    display: flex;
    flex: 1;
    width: auto;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
  }
`;
