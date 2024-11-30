import { useState } from "react";
import "../css/App.css";
import OptionsBar from "./OptionsBar/OptionsBar";
import AppearanceSection from "./ AppearanceSection/AppearanceSection";
import DataSection from "./DataSection/DataSection";
import FooterSection from "./FooterSection/FooterSection";
import LoadBar from "./LoadBar/LoadBar";
import CvOne from "./CVPreview/CvOne";

function App() {
  // estados globales
  const [activeSection, setActiveSection] = useState("data");

  // data
  const [data, setData] = useState({
    personalDetails: [],
    experience: [],
    education: [],
  });

  function handlePushData(section, newData) {
    setData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], newData],
    }));
  }

  function handleRemoveData() {
    setData({
      personalDetails: [],
      experience: [],
      education: [],
    });
  }

  // load & clear
  const [isLoad, setIsLoad] = useState(false);
  const [isClear, setIsClear] = useState(false);

  function handleLoadChangeState() {
    setIsLoad(true);
    setIsClear(false);
  }

  function handleClearChangeState() {
    setIsClear(true);
    setIsLoad(false);
    setData({
      personalDetails: [],
      experience: [],
      education: [],
    });
  }

  // Consolas antes del return
  console.log(`is load: ${isLoad}`);
  console.log(`is clear: ${isClear}`);
  console.log("data:", JSON.stringify(data, null, 2));

  return (
    <div className="app__container">
      <main className="app__main">
        {/* CVPreviewSection */}
        <div className="app__cvPreview">
          <h1 className="nameApp">
            CV-BUILDER <span>by Fernando Zárate</span>
          </h1>
          <CvOne />
        </div>
        {/* optionBar & loadBar */}
        <div className="app__controlPanel">
          <div className="app__barContainer">
            <LoadBar handleLoadChangeState={handleLoadChangeState} handleClearChangeState={handleClearChangeState} />
            <OptionsBar setActiveSection={setActiveSection} />
          </div>
          {/* sectionTab */}
          <div className="sectionTab__container">
            {activeSection === "data" && (
              <DataSection
                handlePushData={handlePushData}
                handleRemoveData={handleRemoveData}
                isLoad={isLoad}
                isClear={isClear}
              />
            )}
            {activeSection === "appearance" && (
              <AppearanceSection handlePushData={handlePushData} handleRemoveData={handleRemoveData} />
            )}
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
export default App;
