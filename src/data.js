import { useState, useEffect } from "react";

export const data = [
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

// research further to check if it is necessary to rework this so it doesn't mutate array
export function shuffle(array) {
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
