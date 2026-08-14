import { useState, useEffect } from "react";
import { shuffle } from "./data";
// import reactLogo from './assets/react.svg' - keep to view format for importing assets

function Image({ pokemon }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((json) => setInfo(json))
      .catch((error) => console.error(error));
  }, []);

  const imageUrl = info.sprites.front_default;

  return imageUrl;
}

function App() {
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);
  const [values, setValues] = useState([]);
  const data = [
    { id: 1, image: Image("pikachu") },
    { id: 2, image: "" },
    { id: 3, image: "" },
    { id: 4, image: "" },
    { id: 5, image: "" },
    { id: 6, image: "" },
    { id: 7, image: "" },
    { id: 8, image: "" },
    { id: 9, image: "" },
    { id: 10, image: "" },
  ];

  useEffect(() => {
    if (high < score) {
      setHigh(score);
    }
  }, [score]);

  function handleClick(id) {
    if (!values.includes(id)) {
      setScore((prevCount) => prevCount + 1);
      setValues([...values, id]);
    } else {
      setScore(0);
      setValues([]);
    }
    shuffle(data);
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
            {box.image}
          </button>
        ))}
      </div>
      <div>{values}</div>
    </>
  );
}

export default App;
