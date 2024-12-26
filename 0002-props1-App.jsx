import "./App.css";
import Books from "./Books";

function App() {
  return (
    <>
      <div>
        <h1>Books Names, Authors and Prices</h1>
      </div>

      <Books
        bookName={"Mahşer"}
        bookAuthor={"Peyami Safa"}
        bookPrice={"77 ₺"}
      />

      <Books
        bookName={"Çalıkuşu"}
        bookAuthor={"Reşat Nuri Güntekin"}
        bookPrice={"97 ₺"}
      />
    </>
  );
}

export default App;
