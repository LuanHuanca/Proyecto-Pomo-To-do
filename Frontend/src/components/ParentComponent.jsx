// En tu componente principal
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Aside from '/src/components/Aside';
import Content from '/src/components/Content';

function ParentComponent() {
  const [selectedButton, setSelectedButton] = useState(""); // Estado para almacenar el botón seleccionado

  // Función para manejar el clic en un botón y actualizar el estado
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); // Actualiza el estado con el nombre del botón seleccionado
  };

  return (
    <div>
      <Aside handleButtonClick={handleButtonClick} />
      <Content selectedButton={selectedButton} />
    </div>
  );
}

export default ParentComponent;