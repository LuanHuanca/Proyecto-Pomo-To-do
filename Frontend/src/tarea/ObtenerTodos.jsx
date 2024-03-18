import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:3000/tareas/";

const ObtenerTodos = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const getTareas = async () => {
      try {
        const res = await axios.get(URL);
        setTareas(res.data);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
      }
    };
    getTareas();
  }, []);

  return tareas;
};

export default ObtenerTodos;
