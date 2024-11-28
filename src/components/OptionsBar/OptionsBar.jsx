import { useState } from "react";

function OptionsBar({ setActiveSection }) {
  // Estado para manejar la pestaña activa
  const [activeTab, setActiveTab] = useState("data");

  // Función para cambiar de pestaña
  function handleTabClick(section) {
    setActiveTab(section); // Cambia el estado local
    setActiveSection(section); // Notifica al componente padre
  }

  return (
    <div className="optionBar__container">
      {/* Botón para Data */}
      <button
        className={`optionBar__button ${activeTab === "data" ? "active" : "inactive"}`}
        onClick={() => handleTabClick("data")}>
        <i className="fa-regular fa-file" />
        Data
      </button>

      {/* Botón para Appearance */}
      <button
        className={`optionBar__button ${activeTab === "appearance" ? "active" : "inactive"}`}
        onClick={() => handleTabClick("appearance")}>
        <i className="fa-regular fa-pen-to-square" />
        Appearance
      </button>
    </div>
  );
}

export default OptionsBar;
