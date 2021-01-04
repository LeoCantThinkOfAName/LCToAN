import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "../theme";
import { ColorModes, colorModes } from "../theme/colors";

interface ModesType {
  modes: {
    current: keyof ColorModes;
    options: (keyof ColorModes)[];
  };
}

interface ContextType extends ModesType {
  setMode: React.Dispatch<React.SetStateAction<ModesType>>;
}

const initialState: ContextType = {
  modes: {
    current: "default",
    options: ["default", "dark"],
  },
  setMode: () => {},
};

export const ModeContext = React.createContext<ContextType>(initialState);

export const ModeProvider: React.FC = ({ children }) => {
  const [{ modes }, setMode] = useState<ModesType>(initialState);

  return (
    <ModeContext.Provider
      value={{
        modes,
        setMode,
      }}
    >
      <StyledThemeProvider
        theme={{
          ...theme,
          colors: {
            ...colorModes[modes.current],
          },
        }}
      >
        {children}
      </StyledThemeProvider>
    </ModeContext.Provider>
  );
};

export const ModeConsumer = ModeContext.Consumer;
