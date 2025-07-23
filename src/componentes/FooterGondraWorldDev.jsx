import React from "react";
// Importamos los iconos de react-icons (FaCode y FaStar)
import { FaCode, FaStar } from "react-icons/fa";
// Importamos los estilos SCSS asociados
import "../assets/scss/_03-Componentes/_FooterGondraWorldDev.scss";

function FooterGondraWorldDev() {
  return (
    /* Contenedor principal del footer dev */
    <div className="gondra-footer-dev">
      
      {/* Enlace que lleva al portfolio del desarrollador */}
      <a
        href="https://alejandrobavaro.github.io/gondraworld-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="gondra-dev-link"
      >
        {/* Icono de estrella (lado izquierdo) */}
        <FaStar className="gondra-icon-left" />
        
        {/* Texto central "Gondra World Dev" */}
        <span className="gondra-dev-text">Gondra World Dev</span>
        
        {/* Icono de código (lado derecho) */}
        <FaCode className="gondra-icon-right" />
      </a>
    </div>
  );
}

export default FooterGondraWorldDev;