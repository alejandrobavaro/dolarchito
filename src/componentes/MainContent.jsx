import React from "react";
import "../assets/scss/_03-Componentes/_MainContent.scss";

const MainContent = () => {
  return (
    <div className="main-content-container">
      {/* Este contenido aparecerá debajo del componente de cotizaciones */}
      <section className="additional-content">
        {/* <h2>Información adicional sobre el dólar</h2>
        <p>Aquí puedes agregar más contenido, gráficos, o información relevante.</p> */}
      </section>
    </div>
  );
};

export default MainContent;