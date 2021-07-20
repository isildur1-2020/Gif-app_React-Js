import React from "react";
import PropTypes from "prop-types";
import SquareItem from "../SquareItem/SquareItem";
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
              <SquareItem key={id} title={title} url={url} />
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
