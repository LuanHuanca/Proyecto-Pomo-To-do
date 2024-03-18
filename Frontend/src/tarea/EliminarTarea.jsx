import { useState } from 'react';
import axios from 'axios';

const useEliminarTarea = () => {
  const [error, setError] = useState(null);

  const eliminarTarea = async (idTarea) => {
    try {
      await axios.delete(`http://localhost:3000/tareas/${idTarea}`);
      console.log('Tarea eliminada correctamente');
    } catch (error) {
      setError('Error al eliminar la tarea');
      console.log('Error al eliminar la tarea');
    }
  };

  return { eliminarTarea, error };
};

export default useEliminarTarea;
