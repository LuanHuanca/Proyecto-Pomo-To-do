import React from "react";
import { Icon } from '@iconify/react';
import "../styles/Titulo.css"

const Titulo = ({fecha}) => {
  return (
    <div className="Title">
      <h2>{fecha}</h2>
      <button>
        <Icon icon="bi:filter" color="black" width="25"/>
      </button>
    </div>
  );
};

export default Titulo;
