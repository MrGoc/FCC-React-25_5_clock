import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faPlay,
  faPause,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const defaultBreakLen = 5;
const defaultSessionLen = 25;
const defaultSec = 0;
const incBreak = "incBreak";
const incSession = "incSession";
const decBreak = "decBreak";
const decSession = "decSession";
const counterStarted = "counterStarted";
const counterStopped = "counterStopped";
const counterPaused = "counterPaused";
//const actionStart = "actionStart";
//const actionPaused = "actionPaused";

function App() {
  const [breakLen, setBreakLen] = useState(defaultBreakLen);
  const [sessionLen, setSessionLen] = useState(defaultSessionLen);
  const [counterMin, setCounterMin] = useState(defaultSessionLen);
  const [counterSec, setCounterSec] = useState(defaultSec);
  const [counterActivity, setCounterActivity] = useState(counterStopped);

  function handleReset() {
    setCounterActivity(counterStopped);
    setBreakLen(defaultBreakLen);
    setSessionLen(defaultSessionLen);
    setCounterMin(defaultSessionLen);
    setCounterSec(defaultSec);
  }

  function handleStartPause() {
    if (counterActivity === counterStopped || counterActivity === counterPaused)
      setCounterActivity(counterStarted);
    else if (counterActivity === counterStarted)
      setCounterActivity(counterPaused);
  }

  function handleIncAndDec(action) {
    if (counterActivity === counterStopped) {
      let newValue = 0;
      switch (action) {
        case incBreak:
          newValue = breakLen + 1;
          if (breakLen < 60) setBreakLen(newValue);
          break;
        case incSession:
          newValue = sessionLen + 1;
          if (sessionLen < 60) {
            setSessionLen(newValue);
            setCounterMin(newValue);
          }
          break;
        case decBreak:
          newValue = breakLen - 1;
          if (breakLen > 1) setBreakLen(newValue);
          break;
        case decSession:
          newValue = sessionLen - 1;
          if (sessionLen > 1) {
            setSessionLen(newValue);
            setCounterMin(newValue);
          }
          break;
        default:
          handleReset();
      }
    }
  }

  return (
    <div className="app">
      <h1>25 + 5 Clock</h1>
      <SessionSettings
        breakLen={breakLen}
        sessionLen={sessionLen}
        handleIncAndDec={handleIncAndDec}
      />
      <Timer
        counterMin={counterMin}
        counterSec={counterSec}
        counterActivity={counterActivity}
        handleReset={handleReset}
        handleStartPause={handleStartPause}
      />
    </div>
  );
}

function SessionSettings({ breakLen, sessionLen, handleIncAndDec }) {
  return (
    <div className="sessionSettings">
      <div>
        <h3 id="break-label">Break Length</h3>
        <button
          id="break-decrement"
          onClick={(e) => {
            e.stopPropagation();
            handleIncAndDec(decBreak);
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} size="lg" />
        </button>
        <span id="break-length">{breakLen}</span>
        <button
          id="break-increment"
          onClick={(e) => {
            e.stopPropagation();
            handleIncAndDec(incBreak);
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      </div>
      <div>
        <h3 id="session-label">Session Length</h3>
        <button
          id="session-decrement"
          onClick={(e) => {
            e.stopPropagation();
            handleIncAndDec(decSession);
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} size="lg" />
        </button>
        <span id="session-length">{sessionLen}</span>
        <button
          id="session-increment"
          onClick={(e) => {
            e.stopPropagation();
            handleIncAndDec(incSession);
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      </div>
    </div>
  );
}

function Timer({
  counterMin,
  counterSec,
  counterActivity,
  handleReset,
  handleStartPause,
}) {
  const minutes = counterMin.toString();
  const seconds = counterSec.toString();
  const counter = minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");
  return (
    <div className="timer">
      <div className="timerDisplay">
        <h3 id="timer-label">Session</h3>
        <p id="time-left">{counter}</p>
      </div>
      <div className="timerButtons">
        <button
          id="start_stop"
          onClick={(e) => {
            e.stopPropagation();
            handleStartPause();
          }}
        >
          <FontAwesomeIcon
            icon={counterActivity === counterStarted ? faPause : faPlay}
            size="lg"
          />
        </button>
        <button
          id="reset"
          onClick={(e) => {
            e.stopPropagation();
            handleReset();
          }}
        >
          <FontAwesomeIcon icon={faRepeat} size="lg" />
        </button>
      </div>
    </div>
  );
}

export default App;
