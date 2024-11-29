import { useState } from "react";
import ModalEE from "./ModalEE";
import InfoCard from "./InfoCard";

const ExperienceEducation = ({ name, questions, statements, placeHolder }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]);

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
  const handleRemoveCard = (id) => {
    setCards(cards.filter((card) => id !== card.id));
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
            <InfoCard key={card.id} card={card} statements={statements} removeCard={handleRemoveCard} />
          ))}
        </div>
      )}
      <ModalEE
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
        question={questions}
        placeHolder={placeHolder}
      />
    </div>
  );
};

export default ExperienceEducation;
