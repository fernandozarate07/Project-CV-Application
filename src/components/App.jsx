import { useState } from "react";
import "../css/App.css";
import OptionsBar from "./OptionsBar/OptionsBar";
import AppearanceSection from "./ appearanceSection/ appearanceSection";
import DataSection from "./DataSection/DataSection";
import FooterSection from "./FooterSection/FooterSection";
import LoadBar from "./LoadBar/LoadBar";

function App() {
  const [activeSection, setActiveSection] = useState("data");
  return (
    <div className="app__container">
      <main className="app__main">
        {/* CVPreviewSection */}
        <h1>Aca iria el CV</h1>
        <div className="app__controlPanel">
          {/* optionBar & loadBar */}
          <div className="app__barContainer">
            <OptionsBar setActiveSection={setActiveSection} />
            <LoadBar />
          </div>
          {/* sectionTab */}
          <div className="sectionTab__container">
            {activeSection === "data" && <DataSection />}
            {activeSection === "appearance" && <AppearanceSection />}
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
export default App;
