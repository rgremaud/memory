import { useState, useEffect } from 'react'
import { data } from './data'
// import reactLogo from './assets/react.svg' - keep to view format for importing assets

function App() {
  /* 
  state variables to track:
  score - track the current run 
  high - track the high score
  */
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);
//  const high = 0;

  useEffect(() => {
    if ( high < score )
    { setHigh(score) }
    }, [score]);
  

 function handleClick() {
  setScore((prevCount) => prevCount + 1); 
 }

  return (
    <>
      <header>
        Current Score: {score} High Score: {high}
      </header>
      <body>
        {data.map(box=> 
         <button 
          key={box.id}
          onClick={handleClick} 
          >{box.id}</button> 
        )} 
      </body>
    </>
  )
}

export default App
