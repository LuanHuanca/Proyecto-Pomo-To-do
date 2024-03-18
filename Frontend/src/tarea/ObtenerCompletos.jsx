import axios from "axios";
import { useState, useEffect } from "react";

const URL = 'http://localhost:3000/tareas/';

const ObtenerCompletos = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const getTareas = async () => {
            try {
                const res = await axios.get(URL);
                const tareasFiltradas = res.data.filter(tarea => tarea.completado === true); // Filtrar las tareas con completado === true
                setTareas(tareasFiltradas);
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
            }
        };
        getTareas();
    }, []);

    return tareas;
};

export default ObtenerCompletos;
    