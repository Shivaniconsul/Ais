import React, { useState } from "react";
import "./Item.css";

const Item = ({ id, question, options, correct, submitted }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (!submitted) {
      setSelectedOption(option);
    }
  };

  const getButtonClass = (option) => {
    if (submitted) {
      if (option === correct && selectedOption === option) {
        return "correct"; // Correct answer selected
      } else if (option === selectedOption && selectedOption !== correct) {
        return "incorrect"; // Incorrect answer selected
      } else if (option === correct && selectedOption !== correct) {
        return "correct"; // Highlight correct answer in green if user chose wrong
      }
    }
    return ""; // No background change before submit
  };

  return (
    <div className="item">
      <p>{question}</p>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={getButtonClass(option)}
            disabled={submitted}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Item;
