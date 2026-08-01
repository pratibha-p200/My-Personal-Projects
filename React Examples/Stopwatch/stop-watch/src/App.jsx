import { useState, useEffect } from "react";   
import "./index.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);    
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return (
      String(hrs).padStart(2, "0") +
      ":" +
      String(mins).padStart(2, "0") +                            
      ":" +
      String(secs).padStart(2, "0")                
    );                                              
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>

      <div className="timer">{formatTime()}</div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;