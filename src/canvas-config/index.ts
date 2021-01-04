import colors from "./colors.json";

interface Gradient {
  top: string;
  bottom: string;
  spot1: string;
  spot2: string;
}

export interface Gradients {
  gradients: Gradient[];
}

export default {
  colors,
};
