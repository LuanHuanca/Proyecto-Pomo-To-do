// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '/src/components/NavBar';
import Aside from '/src/components/Aside';
import Content from '/src/components/Content';
// import Footer from '/src/components/Footer'; // Importa el componente Footer

function App() {
  const [selectedButton, setSelectedButton] = useState(""); // Estado para almacenar el botón seleccionado

  // Función para manejar el clic en un botón y actualizar el estado
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <Aside handleButtonClick={handleButtonClick} />
        <Content selectedButton={selectedButton} />
        
      </div>
    </div>
  );
}

export default App;
