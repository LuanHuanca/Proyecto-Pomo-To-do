import React from "react";
import { Icon } from '@iconify/react';
import "../styles/Titulo.css"

const Titulo = ({fecha}) => {
  return (
    <div className="Title">
      <h2>{fecha}</h2>
    </div>
  );
};

export default Titulo;
