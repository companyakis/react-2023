import "./App.css";
import areadata from "./areadata.js";
import Areas from "./components/Areas";
import HeaderArea from "./components/HeaderArea";

function App() {
  return (
    <>
      <HeaderArea />

      <div className="area-main">
        {areadata?.map((area) => (
          <Areas key={area.id} area={area} />
        ))}
      </div>
    </>
  );
}

export default App;
