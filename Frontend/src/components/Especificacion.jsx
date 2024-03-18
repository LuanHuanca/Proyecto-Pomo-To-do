import React from "react";
import "../styles/Especificacion.css";

const Especificacion = ({ number, descripcion }) => {
  return (
    <div className="Recuadro">
      <span id="numero">{number}</span>
      <span id="descripcion">{descripcion}</span>
    </div>
  );
};

export default Especificacion;
