import { useState, useEffect } from "react";
import Photo from "./PhotoPerfil";

const PersonalDetails = ({ handlePushData, handleRemoveData, isLoad, isClear }) => {
  // Estado local para los inputs (inicialmente vacíos)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    profile: "",
  });

  // Manejar el cambio en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Guardar los datos cuando se haga click en el botón Load (isLoad)
  useEffect(() => {
    if (isLoad) {
      // Solo guardamos los datos cuando isLoad es true y cuando los datos han cambiado
      handlePushData("personalDetails", formData);
    }
  }, [isLoad]); // Solo se dispara cuando isLoad cambia

  // Limpiar los datos cuando isClear es true
  useEffect(() => {
    if (isClear) {
      handleRemoveData();
    }
  }, [isClear]); // Solo limpia cuando isClear es true

  return (
    <div className="personalDetails__container">
      <h1>Personal Dates</h1>
      <div className="personalDetails__content">
        <div className="personalDetails__inputContainer">
          <strong>Full Name</strong>
          <input
            type="text"
            placeholder="Michael Johnson"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange} // Mantiene el estado local
          />
        </div>
        <div className="personalDetails__inputContainer">
          <strong>Email</strong>
          <input
            type="text"
            placeholder="michael.johnson1985@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange} // Mantiene el estado local
          />
        </div>
        <div className="personalDetails__inputContainer">
          <strong>Phone Number</strong>
          <input
            type="text"
            placeholder="(212) xxx-xxxx"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange} // Mantiene el estado local
          />
        </div>
        <div className="personalDetails__inputContainer">
          <strong>Address</strong>
          <input
            type="text"
            placeholder="344 Maple Street, Apt 56, New York"
            name="address"
            value={formData.address}
            onChange={handleInputChange} // Mantiene el estado local
          />
        </div>
        <div className="personalDetails__inputContainer">
          <strong>Profile</strong>
          <textarea
            className="personalDEtails__textArea"
            placeholder="Tell us a little about yourself"
            name="profile"
            value={formData.profile}
            onChange={handleInputChange} // Mantiene el estado local
          />
        </div>
        <Photo />

        {/* No necesitamos el botón "Save Data", ya que los datos se guardan automáticamente cuando se haga click en "Load" */}
      </div>
    </div>
  );
};

export default PersonalDetails;
