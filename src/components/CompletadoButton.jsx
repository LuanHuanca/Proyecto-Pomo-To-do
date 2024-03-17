// CompletadoButton.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function CompletadoButton({ handleButtonClick }) {
  return (
    <button onClick={() => handleButtonClick("Completado")}>
      <img src="/src/assets/icono_boton.png" alt="Icon" className="button-icon" />
      Completado
    </button>
  );
}

export default CompletadoButton;
