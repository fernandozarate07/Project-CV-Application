import PersonalDetails from "./PersonalDetails";
import ExperienceEducation from "./Experience & Education";

function DataSection() {
  return (
    <div className="dataSection">
      <PersonalDetails />
      <ExperienceEducation
        name="Education"
        questions={{
          questionOne: "What is the name of the institution?",
          questionTwo: "What is your degree or title?",
          questionThree: "Start and end year (separated by '/')",
        }}
      />
      <ExperienceEducation
        name="Experience"
        questions={{
          questionOne: "What is the name of the company?",
          questionTwo: "What was your position?",
          questionThree: "Start and end year (separated by '/')",
        }}
      />
    </div>
  );
}
export default DataSection;
