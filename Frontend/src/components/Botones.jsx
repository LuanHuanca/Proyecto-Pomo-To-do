import React from "react";
import { Icon } from "@iconify/react";
import "./Botones.css";

const Botones = ({ handleButtonClick,Titulo }) => {
  return (
    <div className="Botones-Content">
      <button onClick={() => handleButtonClick(Titulo)}>
        <Icon icon="ion:options-sharp" className="icono-boton" />
        {Titulo}
      </button>
    </div>
  );
};

export default Botones;
