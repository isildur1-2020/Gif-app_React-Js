import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddCategory.css";
// ICONS
import search from "../../icons/search.png";

const AddCategory = ({ handleSubmit, handleReset, icon }) => {
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = ({ target: { value } }) => setCurrentValue(value);

  return (
    <>
      <form
        className="AddCategory"
        onSubmit={(ev) => handleSubmit(ev, currentValue)}
      >
        <input
          type="text"
          className="AddCategory__input"
          placeholder="What do you want to see?"
          onChange={handleChange}
          value={currentValue}
        />
        <button className="AddCategory__button-search" type="submit">
          <img src={search} alt="search" />
        </button>
        <button
          className="AddCategory__button-delete"
          type="button"
          onClick={handleReset}
        >
          <img src={icon} alt="delete" />
        </button>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default AddCategory;
