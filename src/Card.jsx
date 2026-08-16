import { useState, useEffect } from "react";

// research further to check if it is necessary to rework this so it doesn't mutate array
export function Shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export function Card({ url }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {data ? (
        <div>
          <div>{data.name}</div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

// doesn't work unless added after react starts
// <img src={data.sprites.front_default}></img>
