const PersonalDetails = () => {
  return (
    <div className="personalDetails__container">
      <h1>Personal Dates</h1>
      <div className="personalDetails__content">
        <div className="personalDetails__inputContainer">
          <h3>Full Name</h3>
          <input type="text" />
        </div>
        <div className="personalDetails__inputContainer">
          <h3>Email</h3>
          <input type="text" />
        </div>
        <div className="personalDetails__inputContainer">
          <h3>Phone Number</h3>
          <input type="text" />
        </div>
        <div className="personalDetails__inputContainer">
          <h3>Adress</h3>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
export default PersonalDetails;
