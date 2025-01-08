import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { incrementYear, decrementYear } from "./redux/yearSlice";

function App() {
  const dispatch = useDispatch();

  const { year } = useSelector((store) => store.yearCounter);

  return (
    <>
      <div>
        <button onClick={() => dispatch(incrementYear())}>Year++</button>
      </div>

      <div>{year}</div>

      <div>
        <button onClick={() => dispatch(decrementYear())}>Year--</button>
      </div>
    </>
  );
}

export default App;
