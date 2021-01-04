import { useState, useEffect } from "react";

export default (src: string): HTMLImageElement | null => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = new Image();

    image.src = src;

    image.onload = () => setImage(image);
  }, [src]);

  return image;
};
