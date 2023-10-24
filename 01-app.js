import "./App.css";
import MyInfo from "./components/MyInfo";

function App() {
  return (
    <div className="App">
      <MyInfo 
        ad={"Mustafa"} 
        soyad={"Büyükdereli"}
        reactAmac={"React Native için temel koşul!"}
        reactElestiri={"Gereksiz bir karmaşa olduğunu düşünüyorum. Hep basit ve kolay tut düşüncesiyle çelişiyor. Svelte gibi rakip var, ama Svelte Native gibi mobil seçenekler çok olgun değil."}
      />
    </div>
  );
}

export default App;
