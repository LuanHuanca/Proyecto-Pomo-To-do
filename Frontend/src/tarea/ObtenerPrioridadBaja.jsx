import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:3000/tareas/";

const ObtenerPrioridadBaja = () => {
  const [tareasBajaPrioridad, setTareasBajaPrioridad] = useState([]);

  useEffect(() => {
    const getTareas = async () => {
      try {
        const res = await axios.get(URL);
        const tareasConPrioridadBaja = res.data.filter(tarea => tarea.prioridad === 'Baja');
        setTareasBajaPrioridad(tareasConPrioridadBaja);
      } catch (error) {
        console.error("Error al obtener las tareas de baja prioridad:", error);
      }
    };
    getTareas();
  }, []);

  return tareasBajaPrioridad;
};

export default ObtenerPrioridadBaja;
