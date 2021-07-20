import React from "react";
import PropTypes from "prop-types";

const SquareItem = ({ title, url }) => (
  <div className="SquareData__item">
    <h3>{title}</h3>
    <img src={url} alt={title} />
  </div>
);

SquareItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SquareItem;
