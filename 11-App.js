//App.js son durum

import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Yapılacaklar (Todos):</h1>
      <Todos />
    </div>
  );
}

export default App;
