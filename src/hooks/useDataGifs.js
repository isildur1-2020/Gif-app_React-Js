import { useCallback, useEffect, useState } from "react";
import { getSearchGifs } from "../helpers/getGifs";

export const useDataGifs = (word) => {
  const [state, setstate] = useState({
    error: false,
    loading: true,
    data: [],
  });

  const getData = useCallback(async () => {
    try {
      const data = await getSearchGifs(word);
      setstate((state) => ({
        ...state,
        loading: false,
        data,
      }));
    } catch (err) {
      console.log(err.message);
      setstate((state) => ({
        error: true,
        loading: false,
      }));
    }
  }, [word]);

  useEffect(() => {
    getData();
  }, [getData]);

  return state;
};
