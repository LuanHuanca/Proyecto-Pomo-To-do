// TodosButton.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function TodosButton({ handleButtonClick }) {
  return (
    <button onClick={() => handleButtonClick("Todos")}>
      <img src="/src/assets/icono_boton.png" alt="Icon" className="button-icon" />
      Todos
    </button>
  );
}

export default TodosButton;
