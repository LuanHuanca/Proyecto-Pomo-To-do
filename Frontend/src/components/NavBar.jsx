// src/components/NavBar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "/src/assets/Icosecion.png"; // Ruta al archivo de imagen
import "/src/styles/navbar.css"; // Importar estilos CSS

function NavBar() {
    return (
      <nav>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/inicio"> {/* Enlace a la página de inicio */}
            <img src={logo} alt="Logo del Bar" />
          </a>
          <a href="/iniciar_sesion" style={{ marginLeft: '10px' }}>Iniciar Sesión |</a> {/* Enlace a la página de inicio */}
          <a href="/Entrar" style={{ marginLeft: '10px' }}>Entrar</a> {/* Enlace a la página de inicio */}
        </div>

      </nav>
    );
  }
  
  export default NavBar;
  