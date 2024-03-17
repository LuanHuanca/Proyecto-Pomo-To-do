import React from 'react'
import { Icon } from '@iconify/react';
import './AnadirTarea.css'

const AnadirTarea = () => {
  return (
    <div className='cuadro_anadir_tarea'>
        <span>Puede ingresar la tarea que quisiera colocar para el dia correspondiente</span>
        <br />
      <div className='nueva_tarea'>
        <input type="text" id='nombre_tarea' placeholder='Ingrese su tarea'/>
        <Icon icon="arcticons:pomodoro" id='pomodoro'/>
        <input type="number" id='tiempo_pomodoro' />
        <button className='boton_nueva_tarea'>
            <Icon icon="material-symbols-light:data-check" width="30" />
        </button>
      </div>
    </div>
  )
}

export default AnadirTarea
