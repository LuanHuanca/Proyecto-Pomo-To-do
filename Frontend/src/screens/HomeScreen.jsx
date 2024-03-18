//HomeScreen.jsx 
//eslint-disable-next-line no-unused-vars
import React from 'react';
import Titulo from '../components/Titulo';
import Especificacion from '../components/Especificacion';
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
      <div className="contenido">
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