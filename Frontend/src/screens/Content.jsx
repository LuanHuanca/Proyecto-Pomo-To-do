import React from "react";
import Ventana from "./Ventana";
import useObtenerTareas from "../tarea/ObtenerTareas";
import ObtenerCompletos from "../tarea/ObtenerCompletos";
import ObtenerTodos from "../tarea/ObtenerTodos";
import ObtenerPrioridadBaja from "../tarea/ObtenerPrioridadBaja";
import ObtenerPrioridadMedia from "../tarea/ObtenerPrioridadMedia";
import ObtenerPrioridadAlta from "../tarea/ObtenerPrioridadAlta";

const Content = ({ selectedButton }) => {
  let content = null;
  const tareas = useObtenerTareas();
  const completado = ObtenerCompletos();
  const todos = ObtenerTodos();
  const prioridadBaja = ObtenerPrioridadBaja();
  const prioridadMedia = ObtenerPrioridadMedia();
  const prioridadAlta = ObtenerPrioridadAlta();

  switch (selectedButton) {
    case "Tareas":
      content = <Ventana titulo={"Tareas"} funcion={tareas}/>;
      break;
    case "Completado":
      content = <Ventana titulo={"Completado"} funcion={completado}/>;
      break;
    case "Todos":
      content = <Ventana titulo={"Todos"} funcion={todos}/>;
      break;
    case "Prioridad Baja":
      content = <Ventana titulo={"Prioridad Baja"} funcion={prioridadBaja}/>;
      break;
    case "Prioridad Media":
      content = <Ventana titulo={"Prioridad Media"} funcion={prioridadMedia}/>;
      break;
    case "Prioridad Alta":
      content = <Ventana titulo={"Prioridad Alta"} funcion={prioridadAlta}/>;
      break;
    default:
      content = <div className="default-content">
        <img src="/src/image/welcome.jpg" alt="Bienvenido a nuestro gestor de tareas" />
        <h2>BIENVENIDO A NUESTRO GESTOR DE TAREAS</h2>
      </div>;
      break;
  }

  return <div className="content">{content}</div>;
};

export default Content;
