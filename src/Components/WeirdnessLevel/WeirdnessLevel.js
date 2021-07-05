import React from "react";
import PropTypes from "prop-types";
import "./WeirdnessLevel.css";
// ICONS
import plus from "../../icons/plus.png";
import minus from "../../icons/minus.png";

const WeirdnessLevel = ({ weirdnessLevel, setWeirdnessLevel }) => {
  const handleMinus = () => {
    if (weirdnessLevel !== 0) setWeirdnessLevel(weirdnessLevel - 1);
  };
  const handlePlus = () => {
    if (weirdnessLevel !== 10) setWeirdnessLevel(weirdnessLevel + 1);
  };

  return (
    <div className="Weirdness">
      <button onClick={handleMinus}>
        <img src={minus} alt="minus" />
      </button>
      <span>{`Weirdness Level (${weirdnessLevel})`}</span>
      <button onClick={handlePlus}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

WeirdnessLevel.propTypes = {
  weirdnessLevel: PropTypes.number.isRequired,
  setWeirdnessLevel: PropTypes.func.isRequired,
};

export default WeirdnessLevel;
