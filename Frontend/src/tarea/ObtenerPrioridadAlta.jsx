import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:3000/tareas/";

const ObtenerPrioridadAlta = () => {
  const [tareasAltaPrioridad, setTareasAltaPrioridad] = useState([]);

  useEffect(() => {
    const getTareas = async () => {
      try {
        const res = await axios.get(URL);
        const tareasConPrioridadAlta = res.data.filter(tarea => tarea.prioridad === 'Alta');
        setTareasAltaPrioridad(tareasConPrioridadAlta);
      } catch (error) {
        console.error("Error al obtener las tareas de Alta prioridad:", error);
      }
    };
    getTareas();
  }, []);

  return tareasAltaPrioridad;
};

export default ObtenerPrioridadAlta;
