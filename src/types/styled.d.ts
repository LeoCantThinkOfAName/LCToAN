import * as CSS from "csstype";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: CSS.ColorProperty;
      primary: CSS.ColorProperty;
      secondary: CSS.ColorProperty;
      background: CSS.ColorProperty;
      link: CSS.ColorProperty;
      white: CSS.ColorProperty;
      black: CSS.ColorProperty;
    };
  }
}
