const CvOne = () => {
  return (
    <div className="cvOne__container">
      {/* left */}
      <div className="cvOne__leftSectionContent">
        <div className="cvOne__photoContainer lft-section">
          <div className="cvOne__photo"></div>
        </div>
        <div className="cvOne__contactContainer lft-section">
          <h3>Contact</h3>
          <p>264 XXX-XXXX</p>
          <p> Wilfredo Kenny 201 Norte</p>
          <p>San Juan, Argentina</p>
        </div>
        <div className="cvOne__educationContainer lft-section">
          <h3>Education</h3>
          <p>ISSC</p>
          <p> Profesor de musica </p>
          <p>2017 / 2022</p>
        </div>
        <div className="cvOne__skillContainer lft-section">
          <h3>Skills</h3>
          <p>Html - Css</p>
          <p>Java Scrip - React</p>
          <p>Git - GitHub</p>
          <p>Java Scrip - React</p>
          <p>Java Scrip - React</p>
        </div>
      </div>
      {/* right */}
      <div className="cvOne__rightSectionContent">
        <div className="cvOne__profile">
          <h1 className="cvOne__name"></h1>
          <p className="cvOne__profile"></p>
        </div>
        <div className="cvOne__workExperience"></div>
      </div>
    </div>
  );
};
export default CvOne;
