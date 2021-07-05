import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getSearchGifs } from "../../helpers/getGifs";
import "./SquareDataGifs.css";

const SquareData = ({ word }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getSearchGifs(word);
      // setState
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError(true);
    }
  }, [word]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : !error ? (
        <div className="SquareDataGrid">
          {data &&
            data.map(({ id, title, url }) => (
              <div className="SquareData__item" key={id}>
                <h3>{title}</h3>
                <img src={url} alt={title} />
              </div>
            ))}
        </div>
      ) : (
        <h1>No tenemos resultados...</h1>
      )}
    </>
  );
};

SquareData.propTypes = {
  word: PropTypes.string.isRequired,
};

export default SquareData;
