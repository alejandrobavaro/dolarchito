import React, { useState, useEffect } from "react";
import "../assets/scss/_03-Componentes/_HeaderDolarApi.scss";

const HeaderDolarApi = () => {
  const [dollarData, setDollarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchDollarValue = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const filteredData = data
          .filter(d => ['oficial', 'blue', 'bolsa', 'contadoconliqui', 'mayorista', 'tarjeta'].includes(d.casa))
          .map(d => ({
            nombre: d.casa === 'contadoconliqui' ? 'CCL' : 
                   d.casa === 'oficial' ? 'Oficial' :
                   d.casa === 'blue' ? 'Blue' :
                   d.casa === 'bolsa' ? 'MEP' :
                   d.casa === 'mayorista' ? 'Mayorista' : 'Tarjeta',
            venta: d.venta?.toFixed(2) || 'N/A',
            compra: d.compra?.toFixed(2) || 'N/A',
            variacion: d.variacion || 0
          }));
          
        setDollarData(filteredData);
        setLastUpdated(new Date());
        setError(null);
      } catch (error) {
        console.error("Error fetching dollar data:", error);
        setError("Error al cargar datos del dólar");
      } finally {
        setLoading(false);
      }
    };

    fetchDollarValue();
    const interval = setInterval(fetchDollarValue, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="loading-container">Cargando cotizaciones...</div>;
  if (error) return <div className="error-container">{error}</div>;

  return (
    <div className="dolar-container">
      <div className="dolar-header">
        <h1>Dólar Hoy en Argentina</h1>
        {lastUpdated && (
          <div className="last-updated">
            Actualizado: {lastUpdated.toLocaleTimeString()}
          </div>
        )}
      </div>
      
      <div className="dolar-grid">
        {dollarData.map((dollar, index) => (
          <div key={`dollar-${index}`} className={`dolar-card ${dollar.nombre.toLowerCase()}`}>
            <div className="dolar-name">{dollar.nombre}</div>
            <div className="dolar-values">
              <div className="dolar-compra">
                <span>Compra</span>
                <span className="value">${dollar.compra}</span>
              </div>
              <div className="dolar-venta">
                <span>Venta</span>
                <span className="value">${dollar.venta}</span>
              </div>
            </div>
            {dollar.variacion && (
              <div className={`dolar-variacion ${dollar.variacion >= 0 ? 'positive' : 'negative'}`}>
                {dollar.variacion >= 0 ? '↑' : '↓'} {Math.abs(dollar.variacion)}%
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderDolarApi;