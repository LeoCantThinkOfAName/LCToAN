import { useState, useEffect } from "react";
import { Texture } from "three";

import { loadTexture } from "../helpers/loadingManager";

const useTexture = (src: string): Texture => {
  const [texture, setTexture] = useState(new Texture());

  useEffect(() => {
    loadTexture(src, setTexture);
  }, [src]);

  return texture;
};

export default useTexture;
