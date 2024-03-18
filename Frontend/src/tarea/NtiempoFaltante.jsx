import axios from "axios";
import { useState, useEffect } from "react";

const URL = 'http://localhost:3000/tareas/';

const NtiempoFaltante = () => {
    const [tiempoTotal, setTiempoTotal] = useState(0);

    useEffect(() => {
        const getTareas = async () => {
            try {
                const res = await axios.get(URL);
                const tareasIncompletas = res.data.filter(tarea => !tarea.completado); // Filtrar solo las tareas con completado en false
                const tiempoAcumulado = tareasIncompletas.reduce((total, tarea) => total + tarea.tiempo, 0); // Sumar el tiempo de las tareas incompletas
                setTiempoTotal(tiempoAcumulado); // Establecer el tiempo total de las tareas incompletas
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
            }
        };  
        getTareas();
    }, []);

    return tiempoTotal;
};

export default NtiempoFaltante;
