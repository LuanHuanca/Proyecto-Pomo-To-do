import React, { useState, useEffect } from 'react';
import Loading from './Loading'; // Importa el componente Loading
import SinTareas from './SinTareas';

const ListaTareas = () => {
  const [loading, setLoading] = useState(true);
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    // Simulando una llamada a la base de datos
    setTimeout(() => {
      const tareasMock = []; // Simulación de datos de la base de datos
      setTareas(tareasMock);
      setLoading(false);
    }, 10000); // Simulamos una demora de 2 segundos
  }, []);

  return (
    <div>
      {loading ? (
        <Loading /> // Muestra el componente Loading mientras se carga
      ) : tareas.length > 0 ? (
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))}
        </ul>
      ) : (
        <SinTareas/>
      )}
    </div>
  );
};

export default ListaTareas;
