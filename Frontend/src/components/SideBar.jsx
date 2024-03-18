import React from 'react'
import Botones from './Botones'
import './SideBar.css'

const SideBar = ({ handleButtonClick }) => {
  return (
    <div className='SideBar-content'>
        <h3>Opciones a elegir</h3>
        <Botones Titulo={"Tareas"} handleButtonClick={handleButtonClick}/>
        <Botones Titulo={"Completado"} handleButtonClick={handleButtonClick}/>
        <Botones Titulo={"Todos"} handleButtonClick={handleButtonClick}/>
        <h3>Categorias</h3>
        <Botones Titulo={"Prioridad Baja"} handleButtonClick={handleButtonClick}/>
        <Botones Titulo={"Prioridad Media"} handleButtonClick={handleButtonClick}/>
        <Botones Titulo={"Prioridad Alta"} handleButtonClick={handleButtonClick}/>
    </div>
  )
}

export default SideBar
