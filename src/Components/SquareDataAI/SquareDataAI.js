import React from "react";
import PropTypes from "prop-types";
import { useFetchDataAI } from "../../hooks/useDataAI";
import "./SquareDataAI.css";

const SquareData = ({ word, weirdnessLevel }) => {
  const { error, loading, name, url } = useFetchDataAI(word, weirdnessLevel);

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
