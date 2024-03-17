// MañanaButton.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function MañanaButton({ handleButtonClick, icon }) {
  return (
    <button onClick={() => handleButtonClick("Mañana")}>
      <img src={icon} alt="Icono Mañana" className="button-icon" />
      Mañana
    </button>
  );
}

export default MañanaButton;