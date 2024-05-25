import { useEffect, useState, useRef } from "react";
import "./App.scss";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const restart = () => {
    setMinutes(0);
    setSeconds(0);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div className="App">
      <div id="pomodoro-box">
        <div className="pomodoro-time">
          <p id="my-time">My Timer</p>
          <h1 id="running-time">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <button className="restart" onClick={restart}>
            Restart
          </button>
          <button className="stop" onClick={stop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
