const InfoCard = ({ card, statements, removeCard }) => (
  <div className="infoCard__container">
    <div className="infoCard__content">
      <p>
        <strong>{statements.statementOne} : </strong>
        {card.title}
      </p>
      <p>
        <strong>{statements.statementTwo} : </strong>
        {card.institution}
      </p>
      <p>
        <strong>{statements.statementThree} : </strong>
        {card.date}
      </p>
    </div>
    <div className="infoCard__options">
      <button>
        <i className="fa-solid fa-eye" />
      </button>
      <button onClick={() => removeCard(card.id)}>
        <i className="fa-solid fa-trash" />
      </button>
    </div>
  </div>
);

export default InfoCard;
