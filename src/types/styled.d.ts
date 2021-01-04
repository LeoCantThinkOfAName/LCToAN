import * as CSS from "csstype";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      primary: string;
      secondary: string;
      background: string;
      link: string;
      white: string;
      black: string;
    };
  }
}
