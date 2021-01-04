import { useMemo } from "react";
import data from "../canvas-config";
import { get } from "lodash";

const useRawData = (key: string): any => {
  const response = useMemo(() => {
    return key ? get(data, key, "") : data;
  }, [key]);

  return response;
};

export default useRawData;
