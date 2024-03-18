import React, { useState, useEffect } from 'react';
import Loading from './Loading'; // Importa el componente Loading
import SinTareas from './SinTareas';
import TarjetaTareas from './TarjetaTareas';
import useObtenerTareas from '../tarea/ObtenerTareas';
import ObtenerCompletos from '../tarea/ObtenerCompletos';

const ListaTareas = ({funcion,titulo}) => {
  const [loading, setLoading] = useState(true);
  const tareas = funcion;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Desactiva el loading después de 2 segundos
    }, 3500); // Simulamos una demora de 2 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, []);


  return (
    <div>
      <h2>Listado de {titulo}</h2>
      {loading ? (
        <Loading /> 
      ) : (
        <div>
          {tareas.length > 0 ? (
                <div>
                    {tareas.map((tarea) => (
                        <TarjetaTareas tarea={tarea} key={tarea.id}/>
                    ))}
                </div>
            ) : (
                <SinTareas/>
            )}
        </div>
      )}
    </div>
  );
};

export default ListaTareas;
