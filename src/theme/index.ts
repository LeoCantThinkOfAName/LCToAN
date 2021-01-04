import { Theme } from "styled-system";
import { space } from "./space";
import { defaultScheme } from "./colors";

export const breakpoints: string[] = ["600px"];

export const theme: Theme = {
  space: { ...space },
  breakpoints,
  colors: {
    ...defaultScheme,
  },
};
