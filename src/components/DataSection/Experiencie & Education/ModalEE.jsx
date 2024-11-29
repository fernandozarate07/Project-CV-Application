const ModalEE = ({ isOpen, onClose, onSubmit, question, placeHolder }) => {
  if (!isOpen) return null;

  let title = "";
  let institution = "";
  let date = "";

  const handleSubmit = () => {
    onSubmit({
      institution,
      title,
      date,
    });
  };

  return (
    <div className="modal__container">
      <div className="modal__content">
        <div className="modal__question">
          <strong>{question.questionOne}</strong>
          <input type="text" onChange={(e) => (title = e.target.value)} placeholder={placeHolder.placeHolderOne} />
        </div>
        <div className="modal__question">
          <strong>{question.questionTwo}</strong>
          <input
            type="text"
            onChange={(e) => (institution = e.target.value)}
            placeholder={placeHolder.placeHolderTwo}
          />
        </div>
        <div className="modal__question">
          <strong>{question.questionThree}</strong>
          <input type="text" onChange={(e) => (date = e.target.value)} placeholder={placeHolder.placeHolderThree} />
        </div>
      </div>
      <div className="modal__actions">
        <button className="red" onClick={onClose}>
          Cancel
        </button>
        <button className="green" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};
export default ModalEE;
