import { useReducer, useState } from "react";
import { reducer } from "./redux/reducer";
import cloud from "./assets/images/cloud-computing.png";
import mario from "./assets/images/mario.png";
import luigi from "./assets/images/luigi.png";

const defaultState = {
  animation: "",
  isStart: false,
  buttonContent: "Start",
};
function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [isStart, setIsStart] = useState(false);

  const handleButton = () => {
    if (isStart) {
      dispatch({ type: "STOP" });
      setIsStart(!isStart);
    } else {
      dispatch({ type: "START" });
      setIsStart(!isStart);
    }
  };

  return (
    <>
      <div className="sky">
        <img
          src={cloud}
          className={`cloud cloud${state.animation}`}
          alt="cloud"
        />
        <img
          src={cloud}
          className={`cloud cloud${state.animation}`}
          alt="cloud"
        />
        <img
          src={cloud}
          className={`cloud cloud${state.animation}`}
          alt="cloud"
        />
        <img
          src={cloud}
          className={`cloud cloud${state.animation}`}
          alt="cloud"
        />
      </div>
      <div className="background">
        <button className="btn" onClick={handleButton}>
          {isStart ? "Stop" : "Start"}
        </button>
      </div>
      <div className="road">
        <img src={mario} className={`mario${state.animation}`} alt="mario" />

        <div className="road-line"></div>

        <img src={luigi} className={`luigi${state.animation}`} alt="luigi" />
      </div>
    </>
  );
}

export default App;
