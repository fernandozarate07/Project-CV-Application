import { useState } from "react";

function OptionsBar({ setActiveSection }) {
  const [activeTab, setActiveTab] = useState("data");

  function handleTabClick(section) {
    setActiveTab(section);
    setActiveSection(section);
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
