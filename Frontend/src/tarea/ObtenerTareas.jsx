import axios from "axios";
import { useState, useEffect } from "react";

const URL = 'http://localhost:3000/tareas/';

const useObtenerTareas = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const getTareas = async () => {
            try {
                const res = await axios.get(URL);
                const tareasFiltradas = res.data.filter(tarea => !tarea.completado); // Filtrar las tareas con completado === false
                setTareas(tareasFiltradas);
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
            }
        };
        getTareas();
    }, []);

    return tareas;
};

export default useObtenerTareas;
