import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faPlay,
  faPause,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app">
      <h1>25 + 5 Clock</h1>
      <SessionSettings />
      <Timer />
    </div>
  );
}

function SessionSettings() {
  return (
    <div className="sessionSettings">
      <div>
        <h3 id="break-label">Break Length</h3>
        <button id="break-decrement">
          <FontAwesomeIcon icon={faArrowDown} size="lg" />
        </button>
        <span id="break-length">5</span>
        <button id="break-increment">
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      </div>
      <div>
        <h3 id="session-label">Session Length</h3>
        <button id="session-decrement">
          <FontAwesomeIcon icon={faArrowDown} size="lg" />
        </button>
        <span id="session-length">25</span>
        <button id="session-increment">
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      </div>
    </div>
  );
}

function Timer() {
  return (
    <div className="timer">
      <div className="timerDisplay">
        <h3 id="timer-label">Session</h3>
        <p id="time-left">25:00</p>
      </div>
      <div className="timerButtons">
        <button id="start_stop">
          <FontAwesomeIcon icon={faPlay} size="lg" />
        </button>
        <button id="reset">
          <FontAwesomeIcon icon={faRepeat} size="lg" />
        </button>
      </div>
    </div>
  );
}

export default App;
