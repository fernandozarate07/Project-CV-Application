function LoadBar({ handleLoadChangeState, handleClearChangeState }) {
  return (
    <div className="loadBar__container">
      <button className="loadBar__button active red" onClick={handleClearChangeState}>
        <i className="fa-solid fa-trash" /> Clear Resumen
      </button>

      <button className="loadBar__button active green" onClick={handleLoadChangeState}>
        <i className="fa-solid fa-check" /> Load Resumen
      </button>
    </div>
  );
}

export default LoadBar;
