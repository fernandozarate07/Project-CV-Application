// import { useState } from "react";
import "../css/App.css";
import OptionsBar from "./OptionsBar/OptionsBar";
import AppearanceSection from "./ appearanceSection/ appearanceSection";
import DataSection from "./DataSection/DataSection";
import { useState } from "react";
function App() {
  const [activeSection, setActiveSection] = useState("data");

  return (
    <div className="app__container">
      <OptionsBar setActiveSection={setActiveSection} />
      <div className="sectionTab__container">
        {activeSection === "data" && <DataSection />}
        {activeSection === "appearance" && <AppearanceSection />}
      </div>
    </div>
  );
}
export default App;
