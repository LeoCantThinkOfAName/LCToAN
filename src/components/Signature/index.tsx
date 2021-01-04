import React from "react";
import { Canvas } from "react-three-fiber";
import { ThemeConsumer } from "styled-components";

import GLSL from "./glsl";

const Signature = () => {
  return (
    <ThemeConsumer>
      {theme => {
        return (
          <Canvas
            style={{
              position: "fixed",
              bottom: 0,
              right: 0,
              height: "80vh",
              maxHeight: "100vw",
              maxWidth: "100vw",
              width: "80vh",
              zIndex: -1,
            }}
          >
            <GLSL size={[10, 10]} signColor={theme.colors.primary} />
          </Canvas>
        );
      }}
    </ThemeConsumer>
  );
};

export default Signature;
