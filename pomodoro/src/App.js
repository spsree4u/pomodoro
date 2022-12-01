import { useState } from "react";
import Pomodoro from './components/Pomodoro'

function App() {

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="App">
      <div>
        <h1>Pomodoro</h1>
        <button className="controlButton" onClick={handleClick}>
          { active ? "Stop" : "Start"}
        </button>
      </div>
      
      <div>
        { active && <Pomodoro />}
      </div>
    </div>
  );
}

export default App;
