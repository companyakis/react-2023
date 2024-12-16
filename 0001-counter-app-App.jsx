import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function counterUp() {
    setCounter(counter + 1);
  }

  function counterDown() {
    setCounter(counter - 1);
  }

  return (
    <>
      <div className="header">
        <header>React Easy Counter by Mustafa Buyukdereli</header>
      </div>

      <button className="btn-up" onClick={counterUp}>
        Counter ++
      </button>
      <div className="txt">{counter}</div>
      <button className="btn-down" onClick={counterDown}>
        Counter --
      </button>
    </>
  );
}

export default App;
