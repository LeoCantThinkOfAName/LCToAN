const useAssets = (path: string): string => {
  const src = "";

  if (path) {
    try {
      return require(`../images/${path}`);
    } catch (err) {
      console.warn(err);
    }
  }

  return src;
};

export default useAssets;
