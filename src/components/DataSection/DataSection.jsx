import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ExperienceEducation from "./Experiencie & Education/Experience & Education";

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
        statements={{
          statementOne: "School / University",
          statementTwo: "Degree",
          statementThree: "Period of study",
        }}
        placeHolder={{
          placeHolderOne: "New York Metropolitan University (NYM)",
          placeHolderTwo: "Bachelor of Science in Digital Innovation",
          placeHolderThree: "2016 / 2021",
        }}
      />
      <ExperienceEducation
        name="Experience"
        questions={{
          questionOne: "What is the name of the company?",
          questionTwo: "What was your position?",
          questionThree: "Start and end year (separated by '/')",
        }}
        statements={{
          statementOne: "Company / Business",
          statementTwo: "Position",
          statementThree: "Period of employment",
        }}
        placeHolder={{
          placeHolderOne: "Innovatech Solutions Inc",
          placeHolderTwo: "Chief Innovation Officer (CIO)",
          placeHolderThree: "2022 / Present",
        }}
      />
    </div>
  );
}
export default DataSection;
