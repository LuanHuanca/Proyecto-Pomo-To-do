import axios from "axios";
import { useState, useEffect } from "react";

const URL = 'http://localhost:3000/tareas/';

const NTareas = () => {
    const [cantidadTareasSinCompletar, setCantidadTareasSinCompletar] = useState(0);

    useEffect(() => {
        const getTareas = async () => {
            try {
                const res = await axios.get(URL);
                const tareasSinCompletar = res.data.filter(tarea => !tarea.completado); 
                setCantidadTareasSinCompletar(tareasSinCompletar.length); 
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
            }
        };
        getTareas();
    }, []);

    return cantidadTareasSinCompletar;
};

export default NTareas;
