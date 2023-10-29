Uygulama için temel bileşenleri (components) oluşturacağız.

Todos adlı bir component oluşturacağız ve bu bileşeni App.js içerisine ekleyeceğiz.

App.js şuna benzer görünecek:

import React from 'react';
import TodoList from './Todos';

function App() {
  return (
    <div>
      <h2>Yapılacaklar aşağıda belirtilmiştir: </h2>
      <Todos />
    </div>
  );
}

export default App;
