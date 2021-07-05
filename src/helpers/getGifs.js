import axios from "axios";

const API_KEY = "api_key=JUqMZOHW6WGj5aNeRdaZul2Q0nw7Io2x";

export const getGifs = async (word, weirdnessLevel) => {
  try {
    const API_URL = "https://api.giphy.com/v1/gifs/translate";
    const WORD = `s=${encodeURI(word)}`;
    const WEIRDNESS = `weirdness=${weirdnessLevel}`;
    const FINAL_URL = `${API_URL}?${WORD}&${WEIRDNESS}&${API_KEY}`;

    const { data } = await axios.get(FINAL_URL);
    const { images, title } = data.data;
    const { downsized_large } = images;
    const { url } = downsized_large;

    return {
      url,
      title,
    };
  } catch (err) {
    throw new Error(err);
  }
};
export const getSearchGifs = async (word) => {
  try {
    const API_URL = "https://api.giphy.com/v1/gifs/search";
    const WORD = `q=${encodeURI(word)}`;
    const LIMIT = "limit=10";
    const FINAL_URL = `${API_URL}?${WORD}&${LIMIT}&${API_KEY}`;

    const {
      data: { data },
    } = await axios.get(FINAL_URL);
    const newData = data.map(({ id, images, title }) => {
      const {
        downsized_medium: { url },
      } = images;
      return {
        id,
        url,
        title,
      };
    });
    return newData;
  } catch (err) {
    throw new Error(err);
  }
};
