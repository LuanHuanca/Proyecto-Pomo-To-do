// Aside.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '/src/styles/Aside.css';
import HoyButton from './HoyButton';
import MañanaButton from './MañanaButton'; // Importa el componente MañanaButton

// eslint-disable-next-line react/prop-types
function Aside({ handleButtonClick }) {
  return (
    <aside className="aside">
      <div className="aside-content">
        <h2 className="aside-title">Menu principal</h2>
        <h2 className="aside-title">Menu principal</h2>
        <div className="buttons">
          <HoyButton handleButtonClick={handleButtonClick} icon="/src/assets/icono_boton.png" />
          <MañanaButton handleButtonClick={handleButtonClick} icon="/src/assets/icono_boton.png" />
          {/* Otros botones */}
        </div>
      </div>
    </aside>
  );
}

export default Aside;
