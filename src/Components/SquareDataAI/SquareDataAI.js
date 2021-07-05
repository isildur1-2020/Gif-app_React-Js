import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getGifs } from "../../helpers/getGifs";
import "./SquareDataAI.css";

const SquareData = ({ word, weirdnessLevel }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const { title, url } = await getGifs(word, weirdnessLevel);
      setLoading(false);
      // setState
      setName(title);
      setUrl(url);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError(true);
    }
  }, [word, weirdnessLevel]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : !error ? (
        <div className="SquareData__item">
          <h3>{name}</h3>
          <img src={url} alt={word} />
        </div>
      ) : null}
    </>
  );
};

SquareData.propTypes = {
  word: PropTypes.string.isRequired,
  weirdnessLevel: PropTypes.number.isRequired,
};

export default SquareData;
