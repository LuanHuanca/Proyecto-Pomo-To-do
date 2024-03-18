import { useState } from 'react';
import axios from 'axios';

const useMarcarCompletado = () => {
  const [error, setError] = useState(null);

  const marcarCompletado = async (idTarea) => {
    try {
      // Obtener la tarea actualizada
      const tarea = await axios.get(`http://localhost:3000/tareas/${idTarea}`);
      const tareaActualizada = tarea.data;

      // Cambiar el valor de la propiedad 'completado' de 0 a 1
      tareaActualizada.completado = 1;

      // Actualizar la tarea en la API utilizando el método PUT
      await axios.put(`http://localhost:3000/tareas/${idTarea}`, tareaActualizada);
      
      console.log('Tarea marcada como completada correctamente');
    } catch (error) {
      setError('Error al marcar la tarea como completada');
      console.log('Error al marcar la tarea como completada');
    }
  };

  return { marcarCompletado, error };
};

export default useMarcarCompletado;
