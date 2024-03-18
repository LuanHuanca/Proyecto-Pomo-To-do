import React, { useState } from "react";
import Titulo from "../components/Titulo";
import Especificacion from "../components/Especificacion";
import "./Ventana.css";
import AnadirTarea from "../components/AnadirTarea";
import ListaTareas from "../components/ListaTareas";
import Modal from "../components/Modal";
import { createPortal } from "react-dom";

import DistribucionTabla from "./DistribucionTabla";

const Ventana = ({ titulo, funcion }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="content">
      <Titulo fecha={titulo} />
      <DistribucionTabla titulo={titulo} funcion={funcion} />
      {titulo !== "Completado" && (
        <>
          <button className="btn btn-open" onClick={handleButtonClick}>
            Añadir Tarea
          </button>
          {modalOpen &&
            createPortal(
              <Modal closeModal={handleCloseModal} titulo={"Registrar tarea"}>
                <AnadirTarea onCancel={handleCloseModal} />
              </Modal>,
              document.body
            )}
        </>
      )}
      <ListaTareas funcion={funcion} titulo={titulo} />
    </div>
  );
};

export default Ventana;
