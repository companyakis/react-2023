import { useState } from "react";
import "./App.css";

function App() {
  
  const [proverb, setProverb] = useState(
    "Kurt kışı geçirir, yediği ayazı unutmaz!"
  );

  const [specialCounter, setSpecialCounter] = useState(0);

  function handleProverb() {
    setProverb("A rolling stone gathers no moss");
  }

  function handleCounter() {
    setSpecialCounter(2 * specialCounter + 1);
  }

  return (
    <>
      <div>
        <h3>A nice proverb: {proverb}</h3>
        <button onClick={handleProverb}>Change Proverb</button>
      </div>

      <div>
        <h3>Counter: f(x) = 2 * x + 1 </h3>
        <h4>Current counter value: {specialCounter}</h4>
        <button onClick={handleCounter}>2 * counter + 1</button>
      </div>
    </>
  );
}

export default App;
