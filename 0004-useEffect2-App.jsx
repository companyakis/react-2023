import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [year, setYear] = useState(2024)

  const [country, setCountry] = useState("Turkiye")
 
  useEffect(() => {
    console.log("First render and year state!")
  }, [year])

  useEffect(() => {
    console.log("First render and country state!")
  }, [country])

  function handleYear() {
    setYear(2025)
  }

  function handleCountry() {
    setCountry("Canada")
  }

  return (
    <>
    <h5>useEffect Hook</h5>

    <div>
      Year: {year} and country: {country}
    </div>

    <div>
      <button onClick={handleYear}>Change Year</button>
      <button onClick={handleCountry}>Change Country</button>
    </div>

    </>
  );
}

export default App;
