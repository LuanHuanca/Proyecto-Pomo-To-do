// Aside.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '/src/styles/Aside.css';
import HoyButton from './HoyButton';
import MañanaButton from './MañanaButton'; // Importa el componente MañanaButton
import CompletadoButton from './CompletadoButton'; // Importa el componente CompletadoButton
import TareaButton from './TareaButton'; // Importa el componente TareaButton
import TodosButton from './TodosButton'; // Importa el componente TodosButton

// eslint-disable-next-line react/prop-types
function Aside({ handleButtonClick }) {
  return (
    <aside className="aside">
      <div className="aside-content">
          <br></br> <br></br> <br></br>  <br></br>
        <h2 className="aside-title">Menu principal</h2>
       
        <div className="buttons">
          <HoyButton handleButtonClick={handleButtonClick} icon="/src/assets/icono_boton.png" />
          <MañanaButton handleButtonClick={handleButtonClick} icon="/src/assets/icono_boton.png" />
          <CompletadoButton handleButtonClick={handleButtonClick} icon="/src/assets/icono_boton.png" />
          <TareaButton handleButtonClick={handleButtonClick} icon="/src/assets/icono_boton.png" />
          <TodosButton handleButtonClick={handleButtonClick} icon="/src/assets/icono_boton.png" />
      
        </div>
      </div>
    </aside>
  );
}

export default Aside;
