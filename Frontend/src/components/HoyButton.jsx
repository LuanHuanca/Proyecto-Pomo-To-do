// HoyButton.jsx
//
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function HoyButton({ handleButtonClick, icon }) {
  return (
    <button onClick={() => handleButtonClick("Hoy")}>
      <img src={icon} alt="Icono Hoy" className="button-icon" />
      Hoy
    </button>
  );
}

export default HoyButton;