import "../css/App.css";
import OptionsBar from "./OptionsBar/OptionsBar";
import AppearanceSection from "./ appearanceSection/ appearanceSection";
import DataSection from "./DataSection/DataSection";
import FooterSection from "./FooterSection/FooterSection";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("data");
  return (
    <div className="app__container">
      <main className="app__main">
        {/* optionBar & loadBar */}
        <OptionsBar setActiveSection={setActiveSection} />
        {/* sectionTab */}
        <div className="sectionTab__container">
          {activeSection === "data" && <DataSection />}
          {activeSection === "appearance" && <AppearanceSection />}
        </div>
        {/* CVPreviewSection */}
      </main>
      <FooterSection />
    </div>
  );
}
export default App;
