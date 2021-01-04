export interface ThemeColors {
  text: string;
  primary: string;
  secondary: string;
  background: string;
  link: string;
  white: string;
  black: string;
}

export const defaultScheme: ThemeColors = {
  text: "#333",
  primary: "#333",
  secondary: "#555",
  background: "#f1f1f1",
  link: "#333",
  white: "#f1f1f1",
  black: "#333",
};

export const darkScheme: ThemeColors = {
  text: "#f1f1f1",
  primary: "#f1f1f1",
  secondary: "#ccc",
  background: "#333",
  link: "#f1f1f1",
  white: "#f1f1f1",
  black: "#333",
};

export interface ColorModes {
  default: ThemeColors;
  dark: ThemeColors;
}

export interface ColorMode {
  colors: ThemeColors;
}

export const colorModes: ColorModes = {
  default: defaultScheme,
  dark: darkScheme,
};
