import React from 'react';
import Titulo from '../components/Titulo';
import Especificacion from '../components/Especificacion';
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
      <div className="content">
        <Titulo fecha={"Hoy"}/>
        <div className="tabla">
            <Especificacion number={0} descripcion={"Tiempo estimado"}/>
            <Especificacion number={1} descripcion={"Tareas a completar"}/>
            <Especificacion number={0} descripcion={"Tiempo transcurrido"}/>
            <Especificacion number={0} descripcion={"Tareas completadas"}/>
        </div>
      </div>
    );
  };
  
  export default HomeScreen;