// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Especificacion.css";

// eslint-disable-next-line react/prop-types
const Especificacion = ({ number, descripcion }) => {
  return (
    <div className="Recuadro">
      <span id="numero">{number}</span>
      <span id="descripcion">{descripcion}</span>
    </div>
  );
};

export default Especificacion;
