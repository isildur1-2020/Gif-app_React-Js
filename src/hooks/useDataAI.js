import { useState, useEffect, useCallback } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchDataAI = (word, weirdnessLevel) => {
  const [state, setstate] = useState({
    error: false,
    loading: true,
    name: "",
    url: "",
  });

  const getData = useCallback(async () => {
    try {
      const { title: name, url } = await getGifs(word, weirdnessLevel);
      setstate((state) => ({
        ...state,
        loading: false,
        name,
        url,
      }));
    } catch (err) {
      console.log(err.message);
      setstate((state) => ({
        ...state,
        loading: false,
        err: true,
      }));
    }
  }, [word, weirdnessLevel]);

  useEffect(() => {
    getData();
  }, [getData]);

  return state;
};
