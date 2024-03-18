import React from "react";
import { Icon } from "@iconify/react";
import "./TarjetaTareas.css";
import useEliminarTarea from "../tarea/EliminarTarea"; // Importa el hook useEliminarTarea
import useMarcarCompletado from "../tarea/MarcarCompletado";

const obtenerColorPrioridad = (prioridad) => {
  switch (prioridad.toLowerCase()) {
    case 'baja':
      return 'green';
    case 'media':
      return 'yellow';
    case 'alta':
      return 'red';
    default:
      return 'black'; // Por si acaso la prioridad no coincide con ninguno de los casos anteriores
  }
};

const TarjetaTareas = ({ tarea }) => {
  const { eliminarTarea } = useEliminarTarea(); // Llama al hook useEliminarTarea para obtener la función eliminarTarea
  const { marcarCompletado } = useMarcarCompletado(); // Llama al hook useEliminarTarea para obtener la función eliminarTarea
  const colorPrioridad = obtenerColorPrioridad(tarea.prioridad); // Obtener el color de la prioridad

  const handleEliminar = () => {
    eliminarTarea(tarea.id); // Llama a la función eliminarTarea cuando se hace clic en el botón de eliminar
    window.location.reload(false)
  };
  const handleCompletar = () => {
    marcarCompletado(tarea.id); // Llama a la función eliminarTarea cuando se hace clic en el botón de eliminar
    window.location.reload(false)
  };

  return (
    <div className={tarea.completado ? "tarjeta-container-completo" : "tarjeta-container-incompleto"}>
      <div className="parte-superior">
        <h3>{tarea.titulo}</h3>
        <span style={{ backgroundColor: colorPrioridad }}>{tarea.prioridad}</span>
      </div>
      <div className="detalles">
        <p>{tarea.descripcion}</p>
        <Icon icon="arcticons:pomodoro" width="25" color="red" />
        <span>{tarea.tiempo}</span>
        <span>{tarea.createdAt}</span>
        <Icon icon="material-symbols:avg-time-rounded" width="25" />
      </div>
      <div className="acciones">  
        {tarea.completado ? (
          <button onClick={handleCompletar}>Desmarcar Completado</button>
        ) : (
          <button onClick={handleCompletar}>Marcar Completado</button>
        )}  
        <button>Editar</button>
        <button onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  );
};

export default TarjetaTareas;
