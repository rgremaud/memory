import { useState, useEffect } from "react";
import { data } from "./data";
// import reactLogo from './assets/react.svg' - keep to view format for importing assets

function App() {
  /* 
  state variables to track:
  score - track the current run 
  high - track the high score
  */
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (high < score) {
      setHigh(score);
    }
  }, [score]);

  function handleClick(id) {
    setScore((prevCount) => prevCount + 1);
    setValues([...values, id]);
  }

  return (
    <>
      <header>
        Current Score: {score} High Score: {high}
      </header>
      <div>
        {data.map((box) => (
          <button
            key={box.id}
            value={box.id}
            onClick={() => handleClick(box.id)}
          >
            {box.id}
          </button>
        ))}
      </div>
      <div>{values}</div>
    </>
  );
}

export default App;
