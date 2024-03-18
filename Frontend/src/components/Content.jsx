// Content.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '/src/styles/Content.css';


// eslint-disable-next-line react/prop-types
function Content({ selectedButton }) {
  let content = null;

  switch (selectedButton) {
    case "Hoy":
      content = (
        <div>
          <h2>Lista de Nombres Aleatorios:</h2>
          <ul>
            <li>nyc</li>
            <li>Maria</li>
            <li>Carlos</li>
            <li>Sofia</li>
            <li>Luis</li>
          </ul>
        </div>
      );
      break;
      case "Mañana":
        content = (
          <div>
            <h2>Mañana</h2>

          </div>
        );
        break;
      
      
    case "Completado":
      content = (
        <div>
          <h2>Lista de Nombres Aleatorios:</h2>
          <ul>
            <li>Juan</li>
            <li>dsvdbvdsbcia</li>
            <li>Carlos</li>
            <li>Sofia</li>
            <li>Luis</li>
          </ul>
        </div>
      );
      break;
    case "Tarea":
      content = (
        <div>
          <h2>Lista de Nombres Aleatorios:</h2>
          <ul>
            <li>Juan</li>
            <li>Masfvvarlos</li>
            <li>Sofsvia</li>
            <li>Luis</li>
          </ul>
        </div>
      );
      break;
    case "Todos":
      content = (
        <div>
          <h2>Lista de Nombres Aleatorios:</h2>
          <ul>
            <li>Juan</li>
            <li>Marsvia</li>
            <li>Carsvdlos</li>
            <li>Sofcvia</li>
            <li>Luisvvs</li>
          </ul>
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div className="content">
      {content}
    </div>
  );
}

export default Content;
