import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import SquareDataGifs from "../SquareDataGifs/SquareDataGifs";
// ICONS
import trash from "../../icons/trash.png";

const Search = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (ev, value) => {
    ev.preventDefault();
    const isValid = data.find((elem) => elem === value);
    if (!isValid) setData([value, ...data]);
  };

  const handleReset = () => setData([]);

  return (
    <>
      <AddCategory
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        icon={trash}
      />
      {data.map((word, index) => (
        <SquareDataGifs key={`${word}${index}`} word={word} />
      ))}
    </>
  );
};
export default Search;
