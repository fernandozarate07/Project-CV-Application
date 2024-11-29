import { useState } from "react";

function LoadBar() {
  const [action, setAction] = useState("load");

  function handleTabClick(action) {
    setAction(action);
  }

  return (
    <div className="loadBar__container">
      {/* Botón para Data */}
      <button className="loadBar__button active red" onClick={() => handleTabClick("clear")}>
        <i className="fa-solid fa-trash" /> Clear Resumen
      </button>

      {/* Botón para Appearance */}
      <button className="loadBar__button inactive green" onClick={() => handleTabClick("load")}>
        <i className="fa-solid fa-check" /> Load Resumen
      </button>
    </div>
  );
}

export default LoadBar;
