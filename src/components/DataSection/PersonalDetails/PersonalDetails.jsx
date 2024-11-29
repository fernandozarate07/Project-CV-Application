import Photo from "./PhotoPerfil";

const PersonalDetails = () => {
  return (
    <div className="personalDetails__container">
      <h1>Personal Dates</h1>
      <div className="personalDetails__content">
        <div className="personalDetails__inputContainer">
          <strong>Full Name</strong>
          <input type="text" placeholder="Michael Johnson" />
        </div>
        <div className="personalDetails__inputContainer">
          <strong>Email</strong>
          <input type="text" placeholder="michael.johnson1985@gmail.com" />
        </div>
        <div className="personalDetails__inputContainer">
          <strong>Phone Number</strong>
          <input type="text" placeholder="(212) xxx-xxxx" />
        </div>
        <div className="personalDetails__inputContainer">
          <strong>Adress</strong>
          <input type="text" placeholder="344 Maple Street, Apt 56, New York" />
        </div>
        <div className="personalDetails__inputContainer">
          <strong>Profile</strong>
          <textarea
            className="personalDEtails__textArea"
            placeholder="Tell us a little about yourself, your interests, or your professional experience..."
          />
        </div>
        <Photo />
      </div>
    </div>
  );
};
export default PersonalDetails;
