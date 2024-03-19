import { useState } from 'react';
import axios from 'axios';

const useMarcarCompletado = () => {
  const [error, setError] = useState(null);

  const marcarCompletado = async (idTarea) => {
    try {
      // Obtener la tarea actualizada
      const tarea = await axios.get(`http://localhost:3000/tareas/${idTarea}`);
      const tareaActualizada = tarea.data;

      // Cambiar el valor de la propiedad 'completado' al opuesto del valor actual
      tareaActualizada.completado = !tareaActualizada.completado;

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
