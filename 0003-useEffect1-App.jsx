import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [year, setYear] = useState(2024)

  const [country, setCountry] = useState("Turkiye")
 
  useEffect(() => console.log("Always work!"))

  useEffect(() => {
    console.log("Runs when the component is first rendered!")
  }, [])

  return (
    <>
    <h5>useEffect Hook</h5>

    <div>
      Year: {year} and country: {country}
    </div>

    <div>
      <button>Change Year</button>
      <button>Change Country</button>
    </div>

    </>
  );
}

export default App;
