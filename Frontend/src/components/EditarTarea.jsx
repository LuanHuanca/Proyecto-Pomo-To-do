import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./EditarTarea.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const URL = "http://localhost:3000/tareas/";

const EditarTarea = ({ onCancel,id}) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tiempo, setTiempo] = useState(0);
  const [prioridad, setPrioridad] = useState("");
  const [error, setError] = useState("");

  // Procedimiento para editar tareas
  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(URL+id, {
        titulo: titulo,
        descripcion: descripcion,
        tiempo: tiempo,
        prioridad: prioridad,
      });
      window.location.reload(false);
      onCancel();
    } catch (error) {
      setError("Error al actualizar la tarea. Inténtalo de nuevo más tarde.");
    }
  };

  useEffect(()=>{
    getTareaById()
  },[])

  const getTareaById = async ()=>{
    const res = await axios.get(URL+id)
    setTitulo(res.data.titulo)
    setDescripcion(res.data.descripcion)
    setTiempo(res.data.tiempo)
  }
  

  return (
    <form onSubmit={update}>
      <div className="cuadro_anadir_tarea">
        <span>Ingrese los datos de la tarea</span>
        <h3>Titulo de la tarea</h3>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Titulo de la tarea"
          id="titulo_tarea"
        />
        <h3>Descripcion de la tarea</h3>
        <input
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          type="text"
          id="nombre_tarea"
          placeholder="Ingrese su tarea"
        />
        <div className="nueva_tarea">
          <h3>Tiempo Destinado</h3>
          <Icon icon="arcticons:pomodoro" id="pomodoro" />
          <input
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
            type="number"
            id="tiempo_pomodoro"
          />
        </div>
        <h3>Prioridad de la tarea</h3>
        <select
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
        >
          <option value="">Seleccione una prioridad</option>
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
        {error && <p className="error">{error}</p>}
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-submit">
          Update
        </button>
        <button className="btn btn-cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditarTarea;
