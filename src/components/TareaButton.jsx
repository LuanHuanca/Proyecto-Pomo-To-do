// TareaButton.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function TareaButton({ handleButtonClick }) {
  return (
    <button onClick={() => handleButtonClick("Tarea")}>
      <img src="/src/assets/icono_boton.png" alt="Icon" className="button-icon" />
      Tarea
    </button>
  );
}

export default TareaButton;
