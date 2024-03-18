import React from 'react';
import './Loading.css'; // Importa el archivo CSS para definir la animación

const Loading = () => {
  return (
    <div className='loading-component'>
      <img src='src/image/gato_loading.gif' alt='Cargando...' className='loading-icon' />
    </div>
  );
};

export default Loading;
