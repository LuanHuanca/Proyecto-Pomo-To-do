  import React, { useState } from "react";
  import { Icon } from "@iconify/react";
  import "./AnadirTarea.css";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";


  const URL = "http://localhost:3000/tareas/";

  const AnadirTarea = ({onCancel , refreshList }) => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tiempo, setTiempo] = useState(0);
    const [prioridad, setPrioridad] = useState("");


    //procedimiento guardar tareas
    const guardar = async (e) => {
      e.preventDefault();
      await axios.post(URL, {
        titulo: titulo,
        descripcion: descripcion,
        tiempo: tiempo,
        prioridad: prioridad,
      });
      refreshList(); // Llamamos a la función para refrescar la lista de tareas
      onCancel();

    };
    return (
      <form onSubmit={guardar}>
        <div className="cuadro_anadir_tarea">
          <span>Ingrese los datos de la tarea</span>
          <h3>Titulo de la tarea</h3>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            type="text"
            placeholder="Titulo de la tarea"
            id="titulo_tarea"
            required
          />
          <h3>Descripcion de la tarea</h3>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            id="nombre_tarea"
            placeholder="Ingrese su tarea"
            required
          />
          <div className="nueva_tarea">
            <h3>Tiempo Destinado</h3>
            <Icon icon="arcticons:pomodoro" id="pomodoro" />
            <input
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
              type="number"
              id="tiempo_pomodoro"
              required
            />
          </div>
          <h3>Prioridad de la tarea</h3>
          <select
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option value="Bajo">Baja</option>
            <option value="Medio">Medio</option>
            <option value="Alta">Alto</option>
          </select>
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-submit" onClick={guardar}>
            Submit
          </button>
          <button className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  };

  export default AnadirTarea;
