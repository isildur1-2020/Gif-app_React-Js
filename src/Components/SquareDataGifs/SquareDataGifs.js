import React from "react";
import PropTypes from "prop-types";
import { useDataGifs } from "../../hooks/useDataGifs";
import "./SquareDataGifs.css";

const SquareData = ({ word }) => {
  const { error, loading, data } = useDataGifs(word);

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
