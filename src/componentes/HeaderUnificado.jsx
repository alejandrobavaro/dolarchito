import React from "react";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

const HeaderUnificado = ({ 
  categories, 
  onCategoryChange, 
  searchQuery, 
  setSearchQuery 
}) => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo-container">
          <img src="/img/02-logos/logodolarchito.png" alt="Logo Dolarchito" className="logo" />
        </div>
        
        {/* <nav className="main-nav">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <button 
                  onClick={() => onCategoryChange(category)}
                  className="nav-link"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav> */}
        
        {/* <div className="search-container">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div> */}
      </div>
    </header>
  );
};

export default HeaderUnificado;