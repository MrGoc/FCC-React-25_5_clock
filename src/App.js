import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app">
      <h1>25 + 5 Clock</h1>
      <SessionSettings />
    </div>
  );
}

function SessionSettings() {
  return (
    <div className="sessionSettings">
      <div>
        <h2 id="break-label">Break Length</h2>
        <button>
          <FontAwesomeIcon id="break-decrement" icon={faArrowDown} />
        </button>
        <span id="break-length">5</span>
        <button>
          <FontAwesomeIcon id="break-increment" icon={faArrowUp} />
        </button>
      </div>
      <div>
        <h2 id="session-label">Session Length</h2>
        <button>
          <FontAwesomeIcon id="session-decrement" icon={faArrowDown} />
        </button>
        <span id="session-length">25</span>
        <button>
          <FontAwesomeIcon id="session-increment" icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
}

export default App;
