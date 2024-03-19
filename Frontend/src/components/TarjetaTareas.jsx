import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./TarjetaTareas.css";
import useEliminarTarea from "../tarea/EliminarTarea";
import useMarcarCompletado from "../tarea/MarcarCompletado";
import { createPortal } from "react-dom";
import EditarTarea from "./EditarTarea";
import Modal from "./Modal";
import Temporizador from "../Temporizador/Temporizador";

const obtenerColorPrioridad = (prioridad) => {
  switch (prioridad.toLowerCase()) {
    case "baja":
      return "#57bd9e";
    case "media":
      return "yellow";
    case "alta":
      return "#ee6c4d";
    default:
      return "black";
  }
};

const TarjetaTareas = ({ tarea }) => {
  const { eliminarTarea } = useEliminarTarea();
  const { marcarCompletado } = useMarcarCompletado();
  const colorPrioridad = obtenerColorPrioridad(tarea.prioridad);

  const handleEliminar = () => {
    eliminarTarea(tarea.id);
    window.location.reload(false);
  };

  const handleCompletar = () => {
    marcarCompletado(tarea.id);
    window.location.reload(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [mostrarTemporizador, setMostrarTemporizador] = useState(false); // Estado para controlar si se muestra el temporizador o no

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleMostrarTemporizador = () => {
    setMostrarTemporizador(true); // Mostrar el temporizador al hacer clic en el botón correspondiente
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseTemporizador = () => {
    setMostrarTemporizador(false); // Ocultar el temporizador al cerrar el modal
  };

  const fechaHora = new Date(tarea.createdAt);
  const fecha = fechaHora.toISOString().split("T")[0];
  const horaRestada = new Date(fechaHora.getTime() - 4 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[1]
    .split(".")[0];

  return (
    <div
      className={
        tarea.completado
          ? "tarjeta-container-completo"
          : "tarjeta-container-incompleto"
      }
    >
      <div className="parte-superior">
        <h3>{tarea.titulo}</h3>
        <span style={{ backgroundColor: colorPrioridad }}>
          {tarea.prioridad}
        </span>
      </div>
      <div className="detalles">
        <p>{tarea.descripcion}</p>
        <span>{tarea.tiempo}</span>
        <Icon icon="arcticons:pomodoro" width="25" color="red" />
        <span>{fecha}</span>
        <span>{horaRestada}</span>
        <Icon icon="material-symbols:avg-time-rounded" width="25" />
      </div>
      <div className="acciones">
        {tarea.completado ? (
          <button onClick={handleCompletar}>Desmarcar Completado</button>
        ) : (
          <>
            <button onClick={handleCompletar}>Marcar Completado</button>
            <button onClick={handleEliminar}>Eliminar</button>
            <button onClick={handleButtonClick}>Editar</button>
            {modalOpen &&
              createPortal(
                <Modal
                  closeModal={handleCloseModal}
                  titulo={"Actualizar Tarea"}
                >
                  <EditarTarea onCancel={handleCloseModal} id={tarea.id} />
                </Modal>,
                document.body
              )}
            <button onClick={handleMostrarTemporizador}>Pomodoro</button>
            {mostrarTemporizador && // Mostrar el temporizador solo cuando mostrarTemporizador sea true
              createPortal(
                <Modal
                  closeModal={handleCloseTemporizador}
                  titulo={`Temporizador de ${tarea.titulo}`}
                >
                  <Temporizador />
                </Modal>,
                document.body
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default TarjetaTareas;
