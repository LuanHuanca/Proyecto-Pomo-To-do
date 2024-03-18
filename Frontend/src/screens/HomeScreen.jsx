import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "./HomeScreen.css";
import Content from "./Content";

const HomeScreen = () => {
  const [selectedButton, setSelectedButton] = useState(""); // Estado para almacenar el botón seleccionado

  // Función para manejar el clic en un botón y actualizar el estado
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); // Actualiza el estado con el nombre del botón seleccionado
  };
  return (
    <div>
      <NavBar />
      <div className="Contenido">
        <SideBar handleButtonClick={handleButtonClick}/>
        <Content selectedButton={selectedButton}/>
      </div>
    </div>
  );
};

export default HomeScreen;
