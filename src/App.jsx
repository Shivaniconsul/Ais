import React, { useState, useEffect } from "react";
import Question from "./components/Question/Question";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(60); // 1-minute timer
  const [timeUp, setTimeUp] = useState(false); //  track if time is up
  const [timerRunning, setTimerRunning] = useState(true); // track if the timer is running

  // Timer countdown logic
  useEffect(() => {
    if (timeLeft > 0 && timerRunning) {
      const timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
      return () => clearInterval(timer); // Cleanup 
    } else if (timeLeft === 0 && timerRunning) {
      setTimeUp(true);
      setTimerRunning(false); // Stop the timer when it reaches 0
      alert("Time's up! Please reload to try again.");
    }
  }, [timeLeft, timerRunning]);

  // Reset timer to 60 seconds
  const resetTimer = () => {
    setTimeLeft(60);
    setTimeUp(false);
    setTimerRunning(true); // Start the timer again when next is clicked
  };

  return (
    <div>
      <div className="timer">
        <h1>{timeLeft} seconds</h1>
      </div>
      <Question resetTimer={resetTimer} timeUp={timeUp} />
    </div>
  );
}

export default App;
