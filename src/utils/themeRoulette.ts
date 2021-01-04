import { ColorModes } from "../theme/colors";
interface ThemeRouletteArgs {
  mode: keyof ColorModes;
  modes: (keyof ColorModes)[];
}

const themeRoulette = ({
  mode,
  modes,
}: ThemeRouletteArgs): keyof ColorModes => {
  const currentMode = modes.indexOf(mode);
  const nextMode = currentMode + 1 >= modes.length ? 0 : currentMode + 1;
  return modes[nextMode];
};

export default themeRoulette;
