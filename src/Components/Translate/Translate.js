import React, { useState } from "react";
import WeirdnessLevel from "../WeirdnessLevel/WeirdnessLevel";
import AddCategory from "../AddCategory/AddCategory";
import SquareData from "../SquareDataAI/SquareDataAI";
import "./Translate.css";
// ICONS
import refresh from "../../icons/refresh.png";

const Translate = () => {
  const [word, setWord] = useState(null);
  const [weirdnessLevel, setWeirdnessLevel] = useState(10);

  const handleSubmit = (ev, word) => {
    ev.preventDefault();
    setWord(word);
  };
  const handleReset = async () => {
    const aux = word;
    await setWord(null);
    await setWord(aux);
  };

  return (
    <>
      <AddCategory
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        icon={refresh}
      />
      <WeirdnessLevel
        weirdnessLevel={weirdnessLevel}
        setWeirdnessLevel={setWeirdnessLevel}
      />
      {word && (
        <div className="Translate">
          <SquareData word={word} weirdnessLevel={weirdnessLevel} />
        </div>
      )}
    </>
  );
};

export default Translate;
