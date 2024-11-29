import { useState } from "react";
import ModalEE from "./ModalEE";

const ExperienceEducation = ({ name, questions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]); // Estado para manejar las tarjetas

  const handleAddCard = (data) => {
    const newCard = {
      id: Date.now(),
      institution: data.institution,
      title: data.title,
      date: data.date,
    };
    setCards([...cards, newCard]);
    setIsModalOpen(false);
  };

  return (
    <div className="experienceEducation__container">
      <div className="experienceEducation__title">
        <h1>{name}</h1>
        <button onClick={() => setIsModalOpen(true)}>
          <i className="fa-solid fa-plus" />
        </button>
      </div>

      {/* Solo renderiza experienceEducation__content si hay al menos una tarjeta */}
      {cards.length > 0 && (
        <div className="experienceEducation__content">
          {cards.map((card) => (
            <div key={card.id} className="infoCard__container">
              <div className="infoCard__content">
                <h3>{card.title}</h3>
                <p>{card.institution}</p>
                <p>{card.date}</p>
              </div>
              <div className="infoCard__options">
                <button>
                  <i className="fa-solid fa-eye" />
                </button>
                <button>
                  <i className="fa-solid fa-trash" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <ModalEE
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
        questionOne={questions.questionOne}
        questionTwo={questions.questionTwo}
        questionThree={questions.questionThree}
      />
    </div>
  );
};

export default ExperienceEducation;
