import React from 'react';

//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente filho
//Estado

function App() {
  function incrementCounter() {
    let contador = 0;
  }

  return (
    <>
      <h1>Contador: 0</h1>
      <button>Incrementar</button>
    </>
  );
}

export default App;
