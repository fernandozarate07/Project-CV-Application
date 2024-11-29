import React, { useState } from "react";

function Photo() {
  const [image, setImage] = useState(null);

  // Función para manejar la carga de la imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Obtener el archivo seleccionado
    if (file) {
      setImage(URL.createObjectURL(file)); // Crear una URL local para la imagen
    }
  };
  const handleRemoveImage = () => {
    console.log("Removing image..."); // Asegúrate de que se ejecute
    setImage(null);
  };

  return (
    <div className="photo__container">
      <strong>Photo</strong>
      <div className="photo__content">
        <div className="photo__inputContainer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="file-upload"
            style={{ display: "none" }}
          />
          {/* Label que actúa como botón */}
          <label htmlFor="file-upload" className="photo__button">
            {image ? "Change Photo" : "Load Image"}
          </label>
          {image ? (
            <button className="photo__romoveButton" onClick={handleRemoveImage}>
              <i className="fa-solid fa-trash" />
            </button>
          ) : null}
        </div>
        <div className="photo__imagePreview">{image ? <img src={image} alt="Profile Preview" /> : null}</div>
      </div>
    </div>
  );
}

export default Photo;
