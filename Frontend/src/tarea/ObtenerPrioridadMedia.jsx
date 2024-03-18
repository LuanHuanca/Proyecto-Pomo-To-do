import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:3000/tareas/";

const ObtenerPrioridadMedia = () => {
  const [tareasMediaPrioridad, setTareasMediaPrioridad] = useState([]);

  useEffect(() => {
    const getTareas = async () => {
      try {
        const res = await axios.get(URL);
        const tareasConPrioridadMedia = res.data.filter(tarea => tarea.prioridad === 'Media');
        setTareasMediaPrioridad(tareasConPrioridadMedia);
      } catch (error) {
        console.error("Error al obtener las tareas de media prioridad:", error);
      }
    };
    getTareas();
  }, []);

  return tareasMediaPrioridad;
};

export default ObtenerPrioridadMedia;
