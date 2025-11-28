
import '../styles/AnswerButton.css';

const AnswerButton = ({ selectedValue, onChange, name }) => {
  return (
    <div className="answer-button-group">
      <label className={`answer-option ${selectedValue === 'agree' ? 'selected' : ''}`}>
        <input
          type="radio"
          name={name}
          value="agree"
          checked={selectedValue === 'agree'}
          onChange={onChange}
        />
        <span>Agree</span>
      </label>
      <label className={`answer-option ${selectedValue === 'disagree' ? 'selected' : ''}`}>
        <input
          type="radio"
          name={name}
          value="disagree"
          checked={selectedValue === 'disagree'}
          onChange={onChange}
        />
        <span>Disagree</span>
      </label>
    </div>
  );
};

export default AnswerButton;