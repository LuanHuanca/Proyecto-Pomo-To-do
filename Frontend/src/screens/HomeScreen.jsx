import React, { useEffect, useState } from "react";
import Titulo from "../components/Titulo";
import Especificacion from "../components/Especificacion";
import "./HomeScreen.css";
import AnadirTarea from "../components/AnadirTarea";
import ListaTareas from "../components/ListaTareas";
import Modal from "../components/Modal";
import { createPortal } from "react-dom";
import NTareas from "../tarea/NTareas";
import NTareasCompletas from "../tarea/NTareasCompletas";

const HomeScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false); // Nuevo estado para forzar la actualización
  const Tareas_Incompletas = NTareas();
  const Tareas_Completas = NTareasCompletas();
  const handleButtonClick = (value) => {
    setModalOpen(false);
    setRefresh(true); // Activar la actualización de la lista de tareas
  };
  useEffect(() => {
    if (refresh) {
      setRefresh(false); // Desactivar la actualización después de ejecutarla
    }
  }, [refresh]);
  return (
    <div className="content">
      <Titulo fecha={"Hoy"} />
      <div className="tabla">
        <Especificacion number={0} descripcion={"Tiempo estimado"} />
        <Especificacion number={Tareas_Incompletas} descripcion={"Tareas a completar"} />
        <Especificacion number={0} descripcion={"Tiempo transcurrido"} />
        <Especificacion number={Tareas_Completas} descripcion={"Tareas completadas"} />
      </div>
      <button className="btn btn-open" onClick={() => setModalOpen(true)}>
        Añadir Tarea
      </button>
      {modalOpen &&
        createPortal(
          <Modal closeModal={handleButtonClick} titulo={"Registrar tarea"}>
            <AnadirTarea
              onCancel={handleButtonClick}
              refreshList={() => setRefresh(true)}
            />
          </Modal>,
          document.body
        )}
      <ListaTareas key={refresh.toString()} />{" "}
      {/* Añadir 'key' para forzar la actualización */}
    </div>
  );
};

export default HomeScreen;
