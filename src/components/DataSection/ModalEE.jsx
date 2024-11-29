const ModalEE = ({ isOpen, onClose, onSubmit, questionOne, questionTwo, questionThree }) => {
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
          <h3>{questionOne}</h3>
          <input type="text" onChange={(e) => (title = e.target.value)} />
        </div>
        <div className="modal__question">
          <h3>{questionTwo}</h3>
          <input type="text" onChange={(e) => (institution = e.target.value)} />
        </div>
        <div className="modal__question">
          <h3>{questionThree}</h3>
          <input type="text" onChange={(e) => (date = e.target.value)} />
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
