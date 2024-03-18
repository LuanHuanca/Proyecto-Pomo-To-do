import React from "react";
import "./Modal.css";

const Modal = ({ closeModal, children,titulo }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
        <span>{titulo}</span>
          <p className="close">x</p>
        </div>
        <div className="modal-content">{children}</div>

      </div>
    </div>
  );
};

export default Modal