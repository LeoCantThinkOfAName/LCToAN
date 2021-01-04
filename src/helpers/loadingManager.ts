import { LoadingManager, RepeatWrapping, TextureLoader } from "three";

const loadingManager = new LoadingManager();
const textureLoader = new TextureLoader(loadingManager);

const loadTexture = (src: string, callback?: Function) => {
  const texture = textureLoader.load(src, () => {
    typeof callback === "function" && callback(texture);
  });

  texture.wrapS = texture.wrapT = RepeatWrapping;

  return texture;
};

export { loadTexture };
