import { useState, useEffect } from "react";
import { Shuffle, Card } from "./data";

function App() {
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);
  const [values, setValues] = useState([]);
  const data = [
    { id: 1, url: "https://pokeapi.co/api/v2/pokemon/pikachu" },
    { id: 2, url: "https://pokeapi.co/api/v2/pokemon/snorlax" },
    { id: 3, url: "https://pokeapi.co/api/v2/pokemon/charmander" },
    { id: 4, url: "https://pokeapi.co/api/v2/pokemon/bulbasaur" },
    { id: 5, url: "https://pokeapi.co/api/v2/pokemon/squirtle" },
    { id: 6, url: "https://pokeapi.co/api/v2/pokemon/ditto" },
    { id: 7, url: "https://pokeapi.co/api/v2/pokemon/abra" },
    { id: 8, url: "https://pokeapi.co/api/v2/pokemon/slowpoke" },
    { id: 9, url: "https://pokeapi.co/api/v2/pokemon/cubone" },
    { id: 10, url: "https://pokeapi.co/api/v2/pokemon/sandshrew" },
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
    Shuffle(data);
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
            <Card url={box.url} />
          </button>
        ))}
      </div>
      <div>{values}</div>
    </>
  );
}

export default App;
