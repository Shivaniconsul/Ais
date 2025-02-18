import React, { useState } from "react";
import questions from "../../assets/data";
import Item from "../Item/Item";
import "./Question.css";

const Question = ({ resetTimer, timeUp }) => {
  const [submitted, setSubmitted] = useState(false); // Track if the user has submitted an answer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    resetTimer(); // Reset timer when 'Next' is clicked
    setSubmitted(false); // Reset submitted state for next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = () => {
    setSubmitted(true); // Mark question as submitted
  };

  return (
    <div className="box">
      <div className="heading">
        <h1>Questions</h1>
      </div>
      <hr /> 

      <div className="q">
        {questions.length > 0 && (
          <Item
            key={questions[currentQuestionIndex].id}
            id={questions[currentQuestionIndex].id}
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            correct={questions[currentQuestionIndex].correct}
            submitted={submitted}
          />
        )}
      </div>

      {timeUp ? (
        <div>Time's up! Please reload to try again.</div>
      ) : (
        <div className="actions">
          {!submitted ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
