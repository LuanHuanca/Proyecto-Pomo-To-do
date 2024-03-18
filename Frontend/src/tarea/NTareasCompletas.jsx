import axios from "axios";
import { useState, useEffect } from "react";

const URL = 'http://localhost:3000/tareas/';

const NTareasCompletas = () => {
    const [cantidadTareasCompletadas, setCantidadTareasCompletadas] = useState(0);

    useEffect(() => {
        const getTareas = async () => {
            try {
                const res = await axios.get(URL);
                const tareasCompletadas = res.data.filter(tarea => tarea.completado); // Filtrar las tareas completadas
                setCantidadTareasCompletadas(tareasCompletadas.length); // Establecer la cantidad de tareas completadas
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
            }
        };
        getTareas();
    }, []);

    return cantidadTareasCompletadas;
};

export default NTareasCompletas;
